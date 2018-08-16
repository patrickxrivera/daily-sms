from flask import Flask, request
from flask_restful import Api, Resource
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'changeme'

api = Api(app)


class Message(Resource):
    def post(self):
        resp = MessagingResponse()
        resp.message('Wassup bruh')
        print(str(resp))
        return str(resp)


api.add_resource(Message, '/sms')

if __name__ == '__main__':
    app.run(debug=True)
