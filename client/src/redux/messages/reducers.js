import { handleActions } from 'redux-actions';

const initialState = { all: [] };

export default handleActions(
  {
    ADD_MESSAGE: (state, { message }) => ({
      ...state,
      all: [...state.all, { ...message, active: true }]
    })
  },
  initialState
);
