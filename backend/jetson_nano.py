# pip install Flask
from flask import Flask, jsonify

app = Flask(__name__)

# Example data to send
data = {
    "label": "plastic",
    "category": "recycling",
    "month": "november",
    "day": 10,
    "year": 2024,
    "hour": 3,
}

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(data)  # Convert dictionary to JSON and send as response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)  