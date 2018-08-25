from src.tests.base import BaseTestCase
from src.models import UserModel

user_data = {'phone_number': 9046377834, 'country_code': 1}
new_message = {
    'text': 'Rise and shine!',
    'send_time': '6:00 AM PST',
    'frequency': 'Monday, Tuesday, Wednesday'
}
create_message_route = '/api/message/1'
register_route = '/api/register'


class TestMessageResource(BaseTestCase):
    """Tests for Message Resource"""

    def test_create_message(self):
        """Ensures user can create a new message"""
        with self.client:
            self._post(register_route, user_data)

            data = self._post(create_message_route, new_message)

            user = UserModel.find_by_user_id(1)
            message_text = user.messages[0].text

            self.assertTrue(data['status_code'], 201)
            self.assertEqual(data['success'], 'ok')
            self.assertEqual(message_text, 'Rise and shine!')
