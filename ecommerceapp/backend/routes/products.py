from flask import Blueprint, jsonify, request
from models.product import Product

product_bp = Blueprint('products', __name__)

@product_bp.route('/', methods=['GET'])
def get_products():
    products = Product.get_all_products()
    return jsonify(products)

@product_bp.route('/', methods=['POST'])
def add_product():
    data = request.json
    new_product = Product.add_product(data)
    return jsonify(new_product), 201
