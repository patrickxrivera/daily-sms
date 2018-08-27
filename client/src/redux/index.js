import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import handleActions from './form/reducers';
import messagesReducer from './messages/reducers';
import authReducer from './auth/reducers';

const rootReducer = combineReducers({
  form: formReducer.plugin(handleActions),
  messages: messagesReducer,
  auth: authReducer
});

export default rootReducer;
