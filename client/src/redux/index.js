import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import messagesReducer from './messages/reducers';
import authReducer from './auth/reducers';

const handleActions = {
  create_message: (state, action) => {
    switch (action.type) {
      case 'CLEAR_FIELDS':
        return undefined;
      default:
        return state;
    }
  }
};

const rootReducer = combineReducers({
  form: formReducer.plugin(handleActions),
  messages: messagesReducer,
  auth: authReducer
});

export default rootReducer;
