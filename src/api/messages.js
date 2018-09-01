import axios from 'axios';

import { formatTime } from 'components/Table/helpers';
import { MESSAGE_ENDPOINT, GET_MESSAGE_LIST_ENDPOINT } from 'utils/endpoints';

// TODO: dry these up

const handleError = (err) => {
  console.error(err);
  return { success: false };
};

export const addMessage = (message) =>
  axios
    .post(`${MESSAGE_ENDPOINT}/${message.user_id}`, {
      ...message,
      send_time: formatTime(message.send_time)
    })
    .then(({ data }) => data)
    .catch(handleError);

export const getMessagesFromDb = (userId) =>
  axios
    .get(`${GET_MESSAGE_LIST_ENDPOINT}/${userId}`)
    .then(({ data }) => data)
    .catch(handleError);

export const deleteMessage = (userId, messageId) =>
  axios
    .delete(`${MESSAGE_ENDPOINT}/${userId}/${messageId}`)
    .then(({ data }) => data)
    .catch(handleError);

export const updateMessage = (userId, messageId, data) =>
  axios
    .put(`${MESSAGE_ENDPOINT}/${userId}/${messageId}`, data)
    .then(({ data }) => data)
    .catch(handleError);
