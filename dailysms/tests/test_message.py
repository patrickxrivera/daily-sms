from dailysms.tests.base import BaseTestCase
from dailysms.models import UserModel

user_data = {'phone_number': 9046377834, 'country_code': 1}
new_message = {
    'text': 'Rise and shine!',
    'send_time': '6:00 AM PST',
    'frequency': 'Every day'
}
second_message = {
    'text': 'Anotha one.',
    'send_time': '8:00 AM PST',
    'frequency': 'Weekends'
}
update_message = {'send_time': '7:00 AM PST'}
create_message_route = '/api/message/1'
update_message_route = '/api/message/1/1'
get_messages_route = '/api/messages/1'
register_route = '/api/register'


class TestMessageResource(BaseTestCase):
    """Tests for Message Resource"""

    def test_create_message(self):
        """Ensures user can create a new message"""
        self._post(register_route, user_data)
        data = self._post(create_message_route, new_message)

        user = UserModel.find_by_user_id(1)
        message_text = user.messages[0].text

        self.assertTrue(data['status_code'], 201)
        self.assertEqual(data['success'], 'ok')
        self.assertEqual(message_text, new_message['text'])

    def test_update_message(self):
        """Ensures user can update a message"""
        self._post(register_route, user_data)
        self._post(create_message_route, new_message)

        data = self._put(update_message_route, update_message)

        user = UserModel.find_by_user_id(1)
        message_send_time = user.messages[0].send_time

        self.assertTrue(data['status_code'], 201)
        self.assertEqual(data['success'], 'ok')
        self.assertEqual(message_send_time, update_message['send_time'])

    def test_delete_message(self):
        """Ensures user can delete a message"""
        self._post(register_route, user_data)
        self._post(create_message_route, new_message)

        data = self._delete(update_message_route)

        message_count = UserModel.find_by_user_id(1).messages.count()

        self.assertTrue(data['status_code'], 201)
        self.assertEqual(data['success'], 'ok')
        self.assertEqual(message_count, 0)

    def test_get_messages(self):
        """Ensures user can receive all their messages"""
        self._post(register_route, user_data)
        self._post(create_message_route, new_message)
        self._post(create_message_route, second_message)

        data = self._get(get_messages_route)

        self.assertTrue(data['status_code'], 200)
        self.assertEqual(len(data['messages']), 2)
