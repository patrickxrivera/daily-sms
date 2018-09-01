import os
from dotenv import load_dotenv
from .settings import AuthySettings, TwilioSettings
from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore

load_dotenv()


class BaseConfig:
    """Base configuration"""
    TESTING = False

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PROPAGATE_EXCEPTIONS = True

    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']
    JWT_REFRESH_TOKEN_EXPIRES = False

    TWILIO_NUMBER = os.environ.get('TWILIO_NUMBER')

    SCHEDULER_API_ENABLED = True


class DevelopmentConfig(BaseConfig):
    """Development configuration"""
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    TWILIO_ACCOUNT_SID = os.environ.get('TWILIO_ACCOUNT_SID')
    TWILIO_AUTH_TOKEN = os.environ.get('TWILIO_AUTH_TOKEN')
    SCHEDULER_JOBSTORES = {
        'default': SQLAlchemyJobStore(url=os.environ.get('DATABASE_URL'))
    }


class TestingConfig(BaseConfig):
    """Testing configuration"""
    TESTING = True
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    TWILIO_ACCOUNT_SID = os.environ.get('TWILIO_TEST_ACCOUNT_SID')
    TWILIO_AUTH_TOKEN = os.environ.get('TWILIO_TEST_AUTH_TOKEN')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_TEST_URL')
    SCHEDULER_JOBSTORES = {
        'default': SQLAlchemyJobStore(url=os.environ.get('DATABASE_URL'))
    }


class ProductionConfig(BaseConfig):
    """Production configuration"""
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    TWILIO_ACCOUNT_SID = os.environ.get('TWILIO_ACCOUNT_SID')
    TWILIO_AUTH_TOKEN = os.environ.get('TWILIO_AUTH_TOKEN')
    SCHEDULER_JOBSTORES = {
        'default': SQLAlchemyJobStore(url=os.environ.get('DATABASE_URL'))
    }
