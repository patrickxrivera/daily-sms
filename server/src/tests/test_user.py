import json
from src import db
from src.models.user import UserModel
from src.tests.base import BaseTestCase


class TestUserResource(BaseTestCase):
    """Tests for User resource"""

    def test_registration(self):
        """Ensure user receives tokens when registering"""
        user_data = {'phone_number': 111111111}

        data = self._post('/api/register', user_data)

        self.assertEqual(data['status_code'], 201)
        self.assertTrue('access_token' in data)
        self.assertTrue('refresh_token' in data)

    def _post(self, endpoint, data, content_type='application/json'):
        response = self.client.post(
            endpoint, data=json.dumps(data), content_type=content_type)
        return {**self.to_json(response), 'status_code': response.status_code}

    @staticmethod
    def to_json(response):
        return json.loads(response.data.decode())


if __name__ == 'main':
    unittest.main()
