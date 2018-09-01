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

const handleVerififyUserError = ({ response }) =>
  !response || !response.data.message
    ? { error: true, message: 'Unknown error. Please try again.' }
    : { error: true, ...response.data };

export const verifyUser = (verificationCode, userId) =>
  axios
    .post(`${VERIFY_USER_ENDPOINT}/${userId}`, verificationCode)
    .then(({ data }) => data)
    .catch(handleVerififyUserError);
