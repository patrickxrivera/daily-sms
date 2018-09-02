import { createAction } from 'redux-actions';

import api from 'api';
import { saveAuthCredentials } from 'redux/auth/dispatch';
import { formatUserData, formatVerificationCode } from 'api/helpers';

export const logOutUser = createAction('LOG_OUT_USER');

const auth = (apiFn) => (userData) => async (dispatch) => {
  const formattedUserData = formatUserData(userData);

  const res = await apiFn(formattedUserData);

  if (!res.error) dispatch(saveAuthCredentials(res));

  return res;
};

export const signInUser = auth(api.signInUser);

export const registerUser = auth(api.registerUser);

export const verifyUser = (verificationCode, userId) => async (dispatch) => {
  const formattedVerificationCode = formatVerificationCode(verificationCode);

  const res = await api.verifyUser(formattedVerificationCode, userId);

  if (!res.error) dispatch(saveAuthCredentials(res));

  return res;
};
