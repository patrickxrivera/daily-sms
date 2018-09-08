import { handleActions } from 'redux-actions';

const initialState = { isDemoUser: false };

export default handleActions(
  {
    SAVE_AUTH_CREDENTIALS: (state, { credentials }) => ({
      ...state,
      ...credentials
    }),
    SET_DEMO_USER: (state) => ({
      isDemoUser: true
    })
  },
  initialState
);
