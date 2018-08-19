# import os
# from os.path import join, dirname
# from dotenv import load_dotenv
# from twilio.rest import Client

# dotenv_path = join(dirname(__file__), '.env')
# load_dotenv(dotenv_path)


# ACCOUNT_SID = os.environ['ACCOUNT_SID']
# AUTH_TOKEN = os.environ['AUTH_TOKEN']
# FROM = os.environ['FROM']

# client = Client(ACCOUNT_SID, AUTH_TOKEN)

# message = client.messages.create(
#     body='Hello there!',
#     from_=FROM,
#     to='+19045620299'
# )

# print(message.sid)
