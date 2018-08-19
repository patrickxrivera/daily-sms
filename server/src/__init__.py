from src.utils.decorators import init_decorators
from src.extensions import init_extensions
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from src.extensions import db
from src.api import init_api
from flask_cors import CORS
from flask import Flask
import os

load_dotenv()


def create_app():
    app = Flask(__name__)

    CORS(app)

    # TODO: move to config file w/ test, dev, and prod
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['PROPAGATE_EXCEPTIONS'] = True
    app.config['JWT_SECRET_KEY'] = os.environ['SECRET_KEY']
    app.config['JWT_BLACKLIST_ENABLED'] = True
    app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = False

    jwt = JWTManager(app)

    init_api(app)
    init_extensions(app, db)
    init_decorators(app, db, jwt)

    return app
