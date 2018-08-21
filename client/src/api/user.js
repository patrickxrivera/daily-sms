import axios from 'axios';

import { isInvalidPhoneNumber, normalizeUserData } from './helpers';

const API_BASE = 'http://localhost:5000/api';
const REGISTER_USER_ENDPOINT = `${API_BASE}/register`;

const handleRegisterUserSuccess = (res) => res;

const handleRegisterUserError = ({ response }) => {
  const { message } = response.data;

  return isInvalidPhoneNumber(message) ? message['phone_number'] : message;
};

export const registerUser = (userData) => {
  const normalizedUserData = normalizeUserData(userData);

  return axios
    .post(REGISTER_USER_ENDPOINT, normalizedUserData)
    .then(handleRegisterUserSuccess)
    .catch(handleRegisterUserError);
};
