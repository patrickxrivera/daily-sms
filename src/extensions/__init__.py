"""
    Extensions module. Each extension is initialized in the app factory located
    in app.py
"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def init_extensions(app, db):
    db.init_app(app)
