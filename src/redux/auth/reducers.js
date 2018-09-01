import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    SAVE_AUTH_CREDENTIALS: (state, { credentials }) => ({
      ...state,
      ...credentials
    })
  },
  initialState
);
