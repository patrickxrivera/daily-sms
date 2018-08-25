from src.tests.base import BaseTestCase
from src.models import UserModel

user_data = {'phone_number': 9046377834, 'country_code': 1}
new_message = {
    'text': 'Rise and shine!',
    'send_time': '6:00 AM PST',
    'frequency': 'Monday, Tuesday, Wednesday'
}
update_message = {'send_time': '7:00 AM PST'}
create_message_route = '/api/message/1'
update_message_route = '/api/message/1/1'
register_route = '/api/register'


class TestMessageResource(BaseTestCase):
    """Tests for Message Resource"""

    def setUp(self):
        self._post(register_route, user_data)

    # def test_create_message(self):
    #     """Ensures user can create a new message"""
    #     data = self._post(create_message_route, new_message)

        # user = UserModel.find_by_user_id(1)
        # message_text = user.messages[0].text

    #     self.assertTrue(data['status_code'], 201)
    #     self.assertEqual(data['success'], 'ok')
    #     self.assertEqual(message_text, new_message['text'])

    def test_update_message(self):
        """Ensures user can update a message"""
        self._post(create_message_route, new_message)

        data = self._put(update_message_route, update_message)

        user = UserModel.find_by_user_id(1)
        message_send_time = user.messages[0].send_time

        self.assertTrue(data['status_code'], 201)
        self.assertEqual(data['success'], 'ok')
        self.assertEqual(message_send_time, update_message['send_time'])
