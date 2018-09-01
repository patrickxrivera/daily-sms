import axios from 'axios';
import { registerUserSuccess } from 'redux/auth/dispatch';
import { REGISTER_USER_ENDPOINT, VERIFY_USER_ENDPOINT } from 'utils/endpoints';

import * as h from './helpers';

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
