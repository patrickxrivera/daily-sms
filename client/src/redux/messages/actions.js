import axios from 'axios';
import { addMessageSuccess } from './dispatch';

const API_BASE = 'http://localhost:5000/api';
const ADD_MESSAGE_ENDPOINT = `${API_BASE}/message`;

export const addMessage = (message) => async (dispatch) => {
  return axios
    .post(`${ADD_MESSAGE_ENDPOINT}/${message.user_id}`, message)
    .then(({ data }) => {
      dispatch(addMessageSuccess(message));
      return data;
    })
    .catch((err) => {
      console.error(err);
      return { success: false };
    });
};
