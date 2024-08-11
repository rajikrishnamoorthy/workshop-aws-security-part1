from flask import Flask
from routes.products import product_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(product_bp, url_prefix='/api/products')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
