from flask import Flask, render_template, request
from flask_cors import CORS
import json

app = Flask(__name__, static_url_path='')
CORS(app)

# 首頁
@app.route('/')
def index():
	return render_template('index.html')


# 第二個頁面，目前為測試使用
@app.route('/second')
def Second_Test():
	return render_template('test.html')


# 呼叫OpenAI的接口
@app.route('/Test_ChatGPT', methods=["POST","GET"])
def ChatGPT():
    if request.method == "POST":
        data = request.form.get('Test_ChatGPT')
        print(data)
        return data
    else:
	    return "GET"


if __name__ == '__main__':
	app.run(debug=True)