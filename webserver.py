from flask import Flask, render_template, request, Response, jsonify
from flask_cors import CORS

import openai
from GPT_Respond import get_infor
from openai_check import check_openai_package

import json


# Start App
app = Flask(__name__)
CORS(app)


# Test Unit
@app.route('/test', methods=["POST"])
def Test():
	data1 = request.values['Question1']
	print(data1)
	return jsonify({"Quetion1":data1})


# Route for the Index page
@app.route('/')
def index():
	return render_template('index.html')


# Calling the interface of OpenAI
@app.route('/ChatGPT_Prompting', methods=["POST","GET"])
def ChatGPT():
    if request.method == "POST":
        
        # Get the value of Five input colmn
        data1 = request.values['Question1']
        data2 = request.values['Question2']
        data3 = request.values['Question3']
        data4 = request.values['Question4']
        data5 = request.values['Question5']
        
        # Prompting five times
        backend_prompt = "接下來我會給你一個數字，請你把這個數字加上100再告訴我答案"
        user_input = "data1是" + data1

        try :
            # Usage method:
            # result = get_infor(backend_prompt , user_input)
            # print(result)

            # Prompting 1
            answer1 = get_infor(backend_prompt , "data1是" + data1)

            # Prompting 2
            answer2 = get_infor(backend_prompt , "data1是" + data2)

            # Prompting 3
            # answer3 = get_infor(backend_prompt , "data1是" + data3)

            # Prompting 4
            # answer4 = get_infor(backend_prompt , "data1是" + data4)

            # Prompting 5
            # answer5 = get_infor(backend_prompt , "data1是" + data5)

        except :
            print("1. 請先確定 chatgpt_api.txt 已經放入個人 api key")
            print("2. 請先確定 openai 已經安裝成功")
        
        # JSON not finished
        Return_Data = {
            "Answer1":answer1,
            "Answer2":answer2,
            "Answer3":"null",
            "Answer4":"null",
            "Answer5":"null"
        }

        # Print result and return answer
        return jsonify(Return_Data)
    
    return "Error"


if __name__ == '__main__':
	# check openAI-framework whether installed
	check_openai_package()
	
    # Webserver Listening
	app.run(debug=True)