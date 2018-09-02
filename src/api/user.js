import axios from 'axios';
import { registerUserSuccess } from 'redux/auth/dispatch';
import { handleError } from './helpers';
import {
  REGISTER_USER_ENDPOINT,
  VERIFY_USER_ENDPOINT,
  SIGN_IN_USER_ENDPOINT
} from 'utils/endpoints';

const post = (endpoint) => (requestData) =>
  axios
    .post(endpoint, requestData)
    .then(({ data }) => data)
    .catch(handleError);

export const verifyUser = (verificationCode, userId) =>
  axios
    .post(`${VERIFY_USER_ENDPOINT}/${userId}`, verificationCode)
    .then(({ data }) => data)
    .catch(handleError);

export const registerUser = post(REGISTER_USER_ENDPOINT);

export const signInUser = post(SIGN_IN_USER_ENDPOINT);
