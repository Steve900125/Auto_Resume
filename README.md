# 2023.5.17
更新WebServer服務器

虛擬空間需要安裝flask、flask_cors、openai套件

請在使用前，將您的OpenAI密鑰放在static文件夾中的chatgpt_api.txt文件當中

目前功能：還在測試階段，prompting問題還沒解決

```
pip install flask
pip install flask_cors
pip install openai
```

# 2023.5.16
IMPORTANT ! 
Put your ChatGPT API KEY in the "chatgpt_api.txt"
Develope in Python 3.8 version 

### GPT_Respond.py :
  You can get the response from ChatGPT. 
  The function get_infor() has 2 input. One is "backend_prompt" theother is "user_input"，and return a result

  "backend_prompt" : For example, you can input the corresponding fields of the resume document as prompts.

  "user_input" : Transform the user information into valuable insights using the backend_prompt.

### main.py :
    You can test in here.
    
### openai_check.py :
    Check you have been install "openai".
    If not it will help you auto install.
   
# Git commit

### 下載專案
請先確認有安裝 git

複製整個專案
```
git clone https://github.com/Steve900125/Auto_Resume.git
```

切換 branch (你可以自行選擇分支)
```
git checkout wang
```

### 如何更新

加入到索引
```
git add.
```

填寫更動
```
git commit -m "<填寫版本資訊>"
```

第一次更新需要
```
git remote add origin https://github.com/Steve900125/Auto_Resume.git
```

選擇上傳分支 (你可以自行選擇分支)
```
git branch -M wang
```

上傳
```
git push -u origin wang
```

