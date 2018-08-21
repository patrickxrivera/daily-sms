import axios from 'axios';

import { isInvalidPhoneNumber, formatUserData, formatErrorMessage } from './helpers';

const API_BASE = 'http://localhost:5000/api';
const REGISTER_USER_ENDPOINT = `${API_BASE}/register`;

const handleRegisterUserSuccess = (res) => res;

const handleRegisterUserError = ({ response }) => {
  const { message } = response.data;

  return isInvalidPhoneNumber(message)
    ? formatErrorMessage(message['phone_number'], response)
    : formatErrorMessage(message, response);
};

export const registerUser = (userData) => {
  const normalizedUserData = formatUserData(userData);

  return axios
    .post(REGISTER_USER_ENDPOINT, normalizedUserData)
    .then(handleRegisterUserSuccess)
    .catch(handleRegisterUserError);
};
