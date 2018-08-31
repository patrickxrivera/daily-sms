import { handleActions } from 'redux-actions';

const initialState = { all: [] };

const toggle = (messageId, active) => (message) =>
  messageId === message.id ? { ...message, active } : message;

export default handleActions(
  {
    ADD_MESSAGE: (state, { message }) => ({
      ...state,
      all: [...state.all, message]
    }),
    GET_MESSAGES: (state, { messages }) => ({
      all: messages
    }),
    TOGGLE_ACTIVE_STATE: (state, { messageId, active }) => ({
      ...state,
      all: state.all.map(toggle(messageId, active))
    }),
    DELETE_MESSAGE: (state, { messageId }) => ({
      ...state,
      all: state.all.filter((message) => message.id !== messageId)
    })
  },
  initialState
);
