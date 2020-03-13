from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import datetime

app = Flask(__name__)
CORS(app)

user_counter = 2
time = datetime.datetime.now()

users = [
    {
        "UserID": 1,
        "UserName": "First",
        "UserPassword": "asdf",
        "UserEmail": "first@transformgame.ca",
        "UserCreateDate": time,
        "Logins": [
            {
                "LoginID": 1,
                "LogInTime": time,
                "LogOutTime": time + datetime.timedelta(seconds=60)
            }
        ]
    }
]


@app.route('/')
def home():
    return 'Hello'

# POST /user data: {name}
@app.route('/user', methods=['POST'])
def register_user():
    global user_counter

    # Get request data
    request_data = request.get_json()
    print(request_data)

    # Create new user dictionary
    new_user = {
        "UserID": user_counter,
        "UserName": request_data["UserName"],
        "UserEmail":  request_data["UserEmail"],
        "UserPassword":  request_data["UserPassword"],
        "UserCreateDate":  datetime.datetime.now(),
        "Logins": []
    }

    user_counter = user_counter + 1

    # Append to users
    users.append(new_user)

    return jsonify(new_user)


# GET /user/<string:name>
@app.route('/user/<string:name>')
def get_user(name):
    # Iterate over users
    for user in users:
        # if the user name matches, return it
        if user["UserName"] == name:
            return jsonify(user)
    # if none match, return an error message
    return jsonify({"message": "Sorry, user not found"})

# GET /user  **gets list of users
@app.route('/users')
def get_users():
    return jsonify({"users": users})

# POST /user/<string:name>/login
@app.route('/user/<string:name>/login', methods=['POST'])
def add_user_login(name):
    # # get request data
    # request_data = request.get_json()

    # check if user exists
    for user in users:
        if user["UserName"] == name:
            login_counter = 1

            if user["Logins"]:
                login_counter = len(user["Logins"]) + 1

            # create new login dictionary
            new_login = {
                "LoginID": login_counter,
                "LogInTime": datetime.datetime.now()
                # "LogOutTime": ""
            }
            # append to users
            user["Logins"].append(new_login)
            # return new user
            return jsonify(new_login)
    return jsonify({"message": "Sorry, user not found"})

app.run()
