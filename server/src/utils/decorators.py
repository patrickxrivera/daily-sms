from flask import jsonify
from src.errors import Error


def init_decorators(app, db):

    @app.before_first_request
    def create_tables():
        db.create_all()

    @app.errorhandler(Error)
    def handle_error(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response
