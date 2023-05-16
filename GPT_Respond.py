def get_infor(backend_prompt, user_input):
    import openai
    openai.api_key = open('chatgpt_api.txt','r').read().strip('\n')
    # read file to get api key

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages= [{"role": "user", "content": backend_prompt},
                  {"role": "system", "content": "沒問題"},
                  {"role": "user", "content": user_input}
                  ]
        # Use messages to prompt and input user information
    )

    return completion.choices[0].message.content