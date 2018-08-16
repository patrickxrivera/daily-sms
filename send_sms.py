from twilio.rest import Client

account_sid = 'ACf2842dcb891999cc7ff76a456d335e57'
auth_token = '6d1d3d5f6216f94e187951001640ea16'

client = Client(account_sid, auth_token)

message = client.messages.create(
    body='Hello there!',
    from_='+19046377834',
    to='+19045620299'
)

print(message.sid)
