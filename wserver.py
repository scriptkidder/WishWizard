from flask import Flask, render_template, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import pywhatkit
from datetime import datetime

app = Flask(__name__)
CORS(app)  #

@app.route('/')
def index():
    return render_template('windex.html')

@app.route('/send_wishes', methods=['POST'])
def send_wishes():
    data = request.json
    
    # Extract form data
    message = data.get('message')
    contact = data.get('contact')
    datetime_str = data.get('datetime')
    
    # Parse datetime string
    datetime_obj = datetime.fromisoformat(datetime_str)
    
    # Send birthday wishes
    pywhatkit.sendwhatmsg(contact, message, datetime_obj.hour, datetime_obj.minute)
    
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)
