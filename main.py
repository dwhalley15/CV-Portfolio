from flask import Flask, render_template

import json, os

app = Flask(__name__)

#Function to display the main HTML page.

@app.route('/')
def index():
  return render_template('index.html')

#Function to which reads and returns data from the JSON file.

@app.route('/api/workExp', methods=['GET'])
def get_work_exp():
  route = os.path.realpath(os.path.dirname(__file__))
  json_list = os.path.join(route, "data", "workexperiance.json")
  with open(json_list, 'r') as read_list:
    json_object = json.load(read_list)
  return json_object

#Function to which reads and returns data from the JSON file.

@app.route('/api/qualifications', methods=['GET'])
def get_qualifications():
  route = os.path.realpath(os.path.dirname(__file__))
  json_list = os.path.join(route, "data", "qualifications.json")
  with open(json_list, 'r') as read_list:
    json_object = json.load(read_list)
  return json_object

#Function to which reads and returns data from the JSON file.

@app.route('/api/skills', methods=['GET'])
def get_skills():
  route = os.path.realpath(os.path.dirname(__file__))
  json_list = os.path.join(route, "data", "keyskills.json")
  with open(json_list, 'r') as read_list:
    json_object = json.load(read_list)
  return json_object
  
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080)