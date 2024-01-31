import json
from decimal import Decimal
from django.http import JsonResponse
from backend.parse import import_data

class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, Decimal):
            return float(o)
        return super(DecimalEncoder, self).default(o)


def index(request):
    
    start_param = request.GET.get('start', None)
    
    csv_file_path = 'backend/dataset.csv'  # Replace with your actual file path
    arr = import_data(csv_file_path, start_param)
        
    for entry in arr:
        entry["timestamp"] = entry["timestamp"].strftime("%Y-%m-%d %H:%M:%S")

    # Serialize using the custom encoder
    json_data = json.dumps({"data": arr}, cls=DecimalEncoder)

    return JsonResponse(json.loads(json_data), safe=False)
    
    # return JsonResponse(json_data)