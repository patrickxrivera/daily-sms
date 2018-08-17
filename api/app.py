from flask import Flask, make_response, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'changeme'


@app.route('/sms', methods=['POST'])
def reply():
    resp = MessagingResponse()
    resp.message('Wassup bruh!')
    return str(resp)


if __name__ == '__main__':
    app.run(debug=True)
