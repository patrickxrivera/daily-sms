from flask_restful import Resource


class MessageWorker(Resource):
    def post(self):
        resp = MessagingResponse()
        resp.message('Wassup bruh')
        return with_xml(str(resp))
