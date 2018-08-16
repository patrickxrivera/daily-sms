import os
from twilio.rest import Client

for var in os.environ:
    print(var)

ACCOUNT_SID = os.environ['ACCOUNT_SID']
AUTH_TOKEN = os.environ['AUTH_TOKEN']
FROM = os.environ['FROM']

print(ACCOUNT_SID, AUTH_TOKEN, FROM)

client = Client(ACCOUNT_SID, AUTH_TOKEN)

# message = client.messages.create(
#     body='Hello there!',
#     from_=FROM,
#     to='+19045620299'
# )

# print(message.sid)
