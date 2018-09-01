import { createAction } from 'redux-actions';

import api from 'api';
import { registerUserSuccess, verifyUserSuccess } from 'redux/auth/dispatch';
import { formatUserData, formatVerificationCode } from 'api/helpers';

export const logOutUser = createAction('LOG_OUT_USER');

export const registerUser = (userData) => async (dispatch) => {
  const formattedUserData = formatUserData(userData);

  const res = await api.registerUser(formattedUserData);

  if (!res.error) dispatch(registerUserSuccess(res));

  return res;
};

const handleVerififyUserError = ({ response }) =>
  !response || !response.data.message ? 'Unknown error. Please try again.' : response.data;

export const verifyUser = (verificationCode, userId) => async (dispatch) => {
  const formattedVerificationCode = formatVerificationCode(verificationCode);

  const res = await api.verifyUser(formattedVerificationCode, userId);

  if (!res.error) dispatch(verifyUserSuccess(res));

  return res;
};
