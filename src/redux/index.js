import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import handleActions from './form/reducers';
import messagesReducer from './messages/reducers';
import authReducer from './auth/reducers';

const appReducer = combineReducers({
  form: formReducer.plugin(handleActions),
  messages: messagesReducer,
  auth: authReducer
});

// clear state on log out
const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
