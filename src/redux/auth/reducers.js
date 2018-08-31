import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    ADD_AUTH_CREDENTIALS: (state, action) => ({
      ...state
    })
  },
  initialState
);
