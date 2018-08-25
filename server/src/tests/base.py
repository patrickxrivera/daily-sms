import json
from flask_testing import TestCase

from src import create_app, db

app = create_app()


class BaseTestCase(TestCase):
    def create_app(self):
        app.config.from_object('src.config.TestingConfig')
        return app

    def setUp(self):
        db.create_all()
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def _put(self, endpoint, data=None, content_type='application/json'):
        response = self.client.put(
            endpoint, data=json.dumps(data), content_type=content_type)

        return {**self.to_json(response), 'status_code': response.status_code}

    def _get(self, endpoint, content_type='application/json'):
        response = self.client.get(
            endpoint, content_type=content_type)

        return {**self.to_json(response), 'status_code': response.status_code}

    def _post(self, endpoint, data=None, content_type='application/json'):
        response = self.client.post(
            endpoint, data=json.dumps(data), content_type=content_type)

        return {**self.to_json(response), 'status_code': response.status_code}

    def _delete(self, endpoint, content_type='application/json'):
        response = self.client.delete(
            endpoint, content_type=content_type)

        return {**self.to_json(response), 'status_code': response.status_code}

    def _post_w_headers(self, endpoint, access_token=''):
        headers = dict(Authorization=f'Bearer {access_token}')

        response = self.client.post(endpoint, headers=headers)

        return {**self.to_json(response), 'status_code': response.status_code}

    def _request():
        pass

    @staticmethod
    def to_json(response):
        return json.loads(response.data.decode())
