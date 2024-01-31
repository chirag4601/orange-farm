from io import StringIO
import csv
import requests
from datetime import datetime
from decimal import Decimal
from datetime import timedelta


def downsample_data(arr, target_points=50):
    if not arr:
        return []

    total_points = len(arr)
    interval_size = total_points // target_points

    downsampled_arr = []

    for i in range(0, total_points, interval_size):
        subset = arr[i:i + interval_size]

        if subset:
            # Aggregate the subset (e.g., take the average of profit_percentage)
            timestamp = subset[0]['timestamp']
            profit_percentage_sum = sum(entry['profit_percentage'] for entry in subset)
            average_profit_percentage = profit_percentage_sum / len(subset)

            downsampled_arr.append({'timestamp': timestamp, 'profit_percentage': average_profit_percentage})

    return downsampled_arr

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
        start_date = now - timedelta(days=30)  # Assuming a month has approximately 30 days
    elif interval == '60d':
        start_date = now - timedelta(days=60)
    elif interval == '200d':
        start_date = now - timedelta(days=200)
    elif interval == 'Yearly':
        start_date = now - timedelta(days=365)  # Assuming a year has approximately 365 days
    else:
        start_date = min(entry['timestamp'] for entry in arr)
    
    print("start dtae: :=> ",start_date)
    
    filtered_arr = [entry for entry in arr if entry['timestamp'] >= start_date]
    
    # print("filtered_arr: :=> ",filtered_arr)
    
    return downsample_data(filtered_arr)



def import_data(s3_url, start):
    response = requests.get(s3_url)
    
    if response.status_code == 200:
        csv_content = response.text
        csv_reader = csv.DictReader(StringIO(csv_content))
        
        arr = []
        
        for row in csv_reader:
            try:
                timestamp = datetime.strptime(row['Timestamp'], '%Y-%m-%d %H:%M:%S')
                profit_percentage = Decimal(row['Profit Percentage'])
                
                entry = {'timestamp': timestamp, 'profit_percentage': profit_percentage}
                arr.append(entry)

                # arr.append({timestamp, profit_percentage})
            except ValueError as e:
                print(f"Error processing row: {e}")
            
        
        return filter_data_by_interval(arr, start)
        
        # print(file)
        # reader = csv.DictReader(file)
        # for row in reader:
        #     profit = Profit.objects.create(
        #         published_date=datetime.strptime(row['Timestamp'], '%Y-%m-%d %H:%M:%S').date(),
        #         price=Decimal(row['Profit Percentage'])
        #     )
        #     print(profit)
            
