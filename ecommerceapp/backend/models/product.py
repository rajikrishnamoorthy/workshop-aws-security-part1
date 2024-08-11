import boto3
from boto3.dynamodb.conditions import Key

# Initialize a session using Amazon DynamoDB
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')  # replace 'your-region' with your AWS region
table = dynamodb.Table('Products')

class Product:
    @staticmethod
    def get_all_products():
        # Scan the DynamoDB table to get all products
        response = table.scan()
        return response['Items']

    @staticmethod
    def add_product(data):
        # Add a new product to the DynamoDB table
        data['product_id'] = str(data['product_id'])
        table.put_item(Item=data)
        return data
