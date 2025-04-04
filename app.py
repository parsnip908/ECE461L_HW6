from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

@app.route('/checkin', methods=['GET'])
def checkIn_hardware():
    project_id = request.args.get('projectId')
    qty = request.args.get('qty')
    message = f"{qty} hardware checked in"
    return jsonify({
        "projectId": project_id,
        "qty": qty,
        "message": message
    })

@app.route('/checkout', methods=['GET'])
def checkOut_hardware():
    project_id = request.args.get('projectId')
    qty = request.args.get('qty')
    message = f"{qty} hardware checked out"
    return jsonify({
        "projectId": project_id,
        "qty": qty,
        "message": message
    })

@app.route('/join', methods=['GET'])
def joinProject():
    project_id = request.args.get('projectId')
    message = f"Joined {project_id}"
    return jsonify({
        "projectId": project_id,
        "message": message
    })

@app.route('/leave', methods=['GET'])
def leaveProject():
    project_id = request.args.get('projectId')
    message = f"Left {project_id}"
    return jsonify({
        "projectId": project_id,
        "message": message
    })

if __name__ == '__main__':
    app.run(debug=True)
