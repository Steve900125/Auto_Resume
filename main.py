from GPT_Respond import get_infor
from openai_check import check_openai_package

check_openai_package()

backend_prompt = "幫我找出有'貓咪'出現多少次"
user_input = "我有一隻貓咪，但這隻貓咪超胖"

try :
    result = get_infor(backend_prompt , user_input)
    print(result)
except :
    print("1. 請先確定 chatgpt_api.txt 已經放入個人 api key")
    print("2. 請先確定 openai 已經安裝成功")

