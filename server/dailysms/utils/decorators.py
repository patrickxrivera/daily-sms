from flask import jsonify
from dailysms.errors import DailySMSError
from dailysms.models.revoked_token import RevokedTokenModel


def init_decorators(app, db, jwt):

    @app.before_first_request
    def create_tables():
        db.create_all()

    @app.errorhandler(DailySMSError)
    def handle_error(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response

    @jwt.token_in_blacklist_loader
    def check_if_token_is_blacklisted(decrypted_token):
        token = decrypted_token['jti']
        return RevokedTokenModel.is_token_blacklisted(token)
