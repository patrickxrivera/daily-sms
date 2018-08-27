import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';
const MESSAGE_ENDPOINT = `${API_BASE}/message`;
const GET_MESSAGE_LIST_ENDPOINT = `${API_BASE}/messages`;

const handleError = (err) => {
  console.error(err);
  return { success: false };
};

export const addMessage = (message) =>
  axios
    .post(`${MESSAGE_ENDPOINT}/${message.user_id}`, message)
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
