from flask_restful import Resource, reqparse


class Test(Resource):
    parser = reqparse.RequestParser()

    @staticmethod
    def get():
        return {'hello': 'world'}
