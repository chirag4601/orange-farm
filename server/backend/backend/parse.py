import os
import requests
import csv
from io import StringIO
from datetime import datetime, timedelta
from decimal import Decimal


def fetch_and_cache_csv(s3_url, local_cache_path):
    os.makedirs(os.path.dirname(local_cache_path), exist_ok=True)

    if os.path.exists(local_cache_path):
        modified_time = datetime.fromtimestamp(os.path.getmtime(local_cache_path))
        current_time = datetime.now()

        if (current_time - modified_time) > timedelta(days=1):
            update_local_cache(s3_url, local_cache_path)
    else:
        update_local_cache(s3_url, local_cache_path)
        
def update_local_cache(s3_url, local_cache_path):
    response = requests.get(s3_url)

    if response.status_code == 200:
        with open(local_cache_path, 'w') as cache_file:
            cache_file.write(response.text)
    else:
        print(f"Failed to fetch CSV from S3. Status Code: {response.status_code}")


#Locally Adaptive Signal Processing (LASP) Algorithm for downSampling
def downsample_data(arr, target_points=50):
    if not arr:
        return []

    total_points = len(arr)
    interval_size = total_points // target_points

    downsampled_arr = []

    for i in range(0, total_points, interval_size):
        subset = arr[i:i + interval_size]

        if subset:
            timestamp = subset[0]['timestamp']
            adaptive_average = calculate_adaptive_average(subset)
            downsampled_arr.append({'timestamp': timestamp, 'adaptive_average': adaptive_average})

    return downsampled_arr

def calculate_adaptive_average(subset):
    if not subset:
        return 0

    window_size = min(len(subset), 5) 
    profit_percentage_sum = sum(entry['profit_percentage'] for entry in subset[-window_size:])
    adaptive_average = profit_percentage_sum / window_size

    return adaptive_average


def filter_data_by_interval(arr, interval):
    now = arr[len(arr) -1]["timestamp"]
    print(now)

    if interval == '7h':
        start_date = now - timedelta(hours=7)
    elif interval == '24h':
        start_date = now - timedelta(days=1)
    elif interval == '7d':
        start_date = now - timedelta(days=7)
    elif interval == '14d':
        start_date = now - timedelta(days=14)
    elif interval == 'Monthly':
        start_date = now - timedelta(days=30) 
    elif interval == '60d':
        start_date = now - timedelta(days=60)
    elif interval == '200d':
        start_date = now - timedelta(days=200)
    elif interval == 'Yearly':
        start_date = now - timedelta(days=365)
    else:
        start_date = min(entry['timestamp'] for entry in arr)
    
    print("start dtae: :=> ",start_date)
    
    filtered_arr = [entry for entry in arr if entry['timestamp'] >= start_date]

    return downsample_data(filtered_arr)



def import_data(s3_url ,local_cache_path, start):
    fetch_and_cache_csv(s3_url, local_cache_path)
    with open(local_cache_path, 'r') as cache_file:
        csv_content = cache_file.read()
        csv_reader = csv.DictReader(StringIO(csv_content))
        
        arr = []
        
        for row in csv_reader:
            try:
                timestamp = datetime.strptime(row['Timestamp'], '%Y-%m-%d %H:%M:%S')
                profit_percentage = Decimal(row['Profit Percentage'])
                
                entry = {'timestamp': timestamp, 'profit_percentage': profit_percentage}
                arr.append(entry)

            except ValueError as e:
                print(f"Error processing row: {e}")
            
        
        return filter_data_by_interval(arr, start)

            
