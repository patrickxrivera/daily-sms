import { createAction } from 'redux-actions';

import api from 'api';
import { registerUserSuccess } from 'redux/auth/dispatch';
import { formatUserData } from 'api/helpers';

export const logOutUser = createAction('LOG_OUT_USER');

export const registerUser = (userData) => async (dispatch) => {
  const normalizedUserData = formatUserData(userData);

  const res = await api.registerUser(normalizedUserData);

  if (!res.error) dispatch(registerUserSuccess(res));

  return res;
};
