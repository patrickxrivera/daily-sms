import axios from 'axios';

import * as h from './helpers';

const API_BASE = 'http://localhost:5000/api';
const REGISTER_USER_ENDPOINT = `${API_BASE}/register`;
const VERIFY_USER_ENDPOINT = `${API_BASE}/verify`;

const handleSuccess = (res) => res;

const handleRegisterUserError = ({ response }) => {
  const { message } = response.data;

  return h.isInvalidPhoneNumber(message)
    ? h.formatErrorMessage(message['phone_number'], response)
    : h.formatErrorMessage(message, response);
};

export const registerUser = (userData) => {
  const normalizedUserData = h.formatUserData(userData);

  return axios
    .post(REGISTER_USER_ENDPOINT, normalizedUserData)
    .then(handleSuccess)
    .catch(handleRegisterUserError);
};

const handleVerififyUserError = ({ response }) => {
  const { message } = response.data;

  // TODO: figure out how to standardize the error message format on the backend
  return message.message ? message.message : message;
};

export const verifyUser = (verificationCode, userId) => {
  const normalizedVerificationCode = h.formatVerificationCode(verificationCode);

  return axios
    .post(`${VERIFY_USER_ENDPOINT}/${userId}`, normalizedVerificationCode)
    .then(handleSuccess)
    .catch(handleVerififyUserError);
};
