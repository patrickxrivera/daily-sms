import axios from 'axios';
import { registerUserSuccess } from 'redux/auth/dispatch';

import * as h from './helpers';

const API_BASE = 'http://localhost:5000/api';
const REGISTER_USER_ENDPOINT = `${API_BASE}/register`;
const VERIFY_USER_ENDPOINT = `${API_BASE}/verify`;

export const registerUser = (userData) =>
  axios
    .post(REGISTER_USER_ENDPOINT, userData)
    .then(({ data }) => data)
    .catch(({ response }) => ({ error: true, ...response.data }));

const handleVerififyUserError = ({ response }) => {
  if (!response) return 'Unknown error. Please try again.';

  const { message } = response.data;

  // TODO: figure out how to standardize the error message format on the backend
  return message.message ? message.message : message;
};

export const verifyUser = (verificationCode, userId) => {
  const normalizedVerificationCode = h.formatVerificationCode(verificationCode);

  return axios
    .post(`${VERIFY_USER_ENDPOINT}/${userId}`, normalizedVerificationCode)
    .then(({ data }) => data)
    .catch(handleVerififyUserError);
};
