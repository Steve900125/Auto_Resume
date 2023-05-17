# 2023.5.17
更新WebServer服務器

虛擬空間需要安裝flask、flask_cors、openai套件

請在使用前，將您的OpenAI密鑰放在static文件夾中的chatgpt_api.txt文件當中

目前功能：還在測試階段，prompting問題還沒解決



# 2023.5.16
IMPORTANT ! 
Put your ChatGPT API KEY in the "chatgpt_api.txt"

GPT_Respond.py :
  You can get the response from ChatGPT. 
  The function get_infor() has 2 input. One is "backend_prompt" theother is "user_input"，and return a result

  "backend_prompt" : For example, you can input the corresponding fields of the resume document as prompts.

  "user_input" : Transform the user information into valuable insights using the backend_prompt.

main.py :
    You can test in here.

openai_check.py :
    Check you have been install "openai".
    If not it will help you auto install.