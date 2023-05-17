import openai

def get_infor(backend_prompt, user_input):
    
    # read file to get api key
    openai.api_key = open('./static/chatgpt_api.txt','r').read().strip('\n')


    # Use messages to prompt and input user information
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages= [{"role": "user", "content": backend_prompt},
                  {"role": "system", "content": "沒問題"},
                  {"role": "user", "content": user_input}
                  ]
    )
    
    return completion.choices[0].message.content
