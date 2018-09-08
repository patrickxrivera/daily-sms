import os
import unittest

from flask import current_app
from flask_testing import TestCase

from dailysms import create_app
from dailysms.config import DevelopmentConfig

app = create_app()


class TestDevelopmentConfig(TestCase):

    def create_app(self):
        app.config.from_object('dailysms.config.DevelopmentConfig')
        return app

    def test_app_is_development(self):
        self.assertTrue(app.config['JWT_SECRET_KEY'] ==
                        os.environ.get('JWT_SECRET_KEY'))
        self.assertFalse(current_app is None)
        self.assertTrue(
            app.config['SQLALCHEMY_DATABASE_URI'] ==
            os.environ.get('DATABASE_URL')
        )


class TestTestingConfig(TestCase):
    def create_app(self):
        app.config.from_object('dailysms.config.TestingConfig')
        return app

    def test_app_is_testing(self):
        self.assertTrue(app.config['SECRET_KEY'] ==
                        os.environ.get('SECRET_KEY'))
        self.assertTrue(app.config['TESTING'])
        self.assertFalse(app.config['PRESERVE_CONTEXT_ON_EXCEPTION'])
        self.assertTrue(
            app.config['SQLALCHEMY_DATABASE_URI'] ==
            os.environ.get('DATABASE_TEST_URL')
        )


class TestProductionConfig(TestCase):
    def create_app(self):
        app.config.from_object('dailysms.config.ProductionConfig')
        return app

    def test_app_is_production(self):
        self.assertTrue(app.config['SECRET_KEY'] ==
                        os.environ.get('SECRET_KEY'))
        self.assertFalse(app.config['TESTING'])


if __name__ == '__main__':
    unittest.main()
