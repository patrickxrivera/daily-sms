from flask import jsonify
from src.errors import Error


def init_decorators(app, db, jwt):

    @app.before_first_request
    def create_tables():
        db.create_all()

    @app.errorhandler(Error)
    def handle_error(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response

    @jwt.token_in_blacklist_loader
    def check_if_token_is_blacklisted(decrypted_token):
        token = decrypted_token['token']
        return models.RevokedTokenModel.is_token_blacklisted(token)
