import api from 'api';
import { createAction } from 'redux-actions';
import generateId from 'uuid/v4';
import { formatTime } from 'utils/helpers';
import {
  addMessageSuccess,
  toggleActiveStateSuccess,
  deleteMessageSuccess,
  getMessagesFromDbSuccess
} from './dispatch';

export const addMessage = ({ isDemoUser, ...messageRequest }) => async (dispatch) => {
  if (isDemoUser) {
    dispatch(
      addMessageSuccess({
        ...messageRequest,
        id: generateId(),
        active: true,
        send_time: formatTime(messageRequest.send_time)
      })
    );
    return;
  }

  const { success, message } = await api.addMessage(messageRequest);

  if (!success) return;

  dispatch(addMessageSuccess(message));

  return message;
};

export const getMessagesFromDb = (userId) => async (dispatch) => {
  const { success, messages } = await api.getMessagesFromDb(userId);

  if (!success) return;

  dispatch(getMessagesFromDbSuccess(messages));

  return messages;
};

export const deleteMessage = (userId, messageId, isDemoUser) => async (dispatch) => {
  if (isDemoUser) {
    dispatch(deleteMessageSuccess(messageId));
    return;
  }

  const { success } = await api.deleteMessage(userId, messageId);

  if (!success) return;

  dispatch(deleteMessageSuccess(messageId));

  return success;
};

export const toggleActiveState = (userId, messageId, isActive, isDemoUser) => async (dispatch) => {
  const newActiveState = !isActive;

  if (isDemoUser) {
    dispatch(toggleActiveStateSuccess(messageId, newActiveState));
    return;
  }

  const { success } = await api.updateMessage(userId, messageId, { active: newActiveState });

  if (!success) return;

  dispatch(toggleActiveStateSuccess(messageId, newActiveState));

  return success;
};
