"""
    Extensions module. Each extension is initialized in the app factory located
    in app.py
"""


from flask_sqlalchemy import SQLAlchemy
from flask_apscheduler import APScheduler
import os

db = SQLAlchemy()
scheduler = APScheduler()


def init_extensions(app, db, scheduler):
    db.init_app(app)

    if not scheduler.running:
        scheduler.init_app(app)
        scheduler.start()
