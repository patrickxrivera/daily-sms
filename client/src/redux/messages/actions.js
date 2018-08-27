import api from 'api';
import { createAction } from 'redux-actions';

import {
  addMessageSuccess,
  toggleActiveStateSuccess,
  deleteMessageSuccess,
  getMessagesFromDbSuccess
} from './dispatch';

export const addMessage = (messageRequest) => async (dispatch) => {
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

export const deleteMessage = (userId, messageId) => async (dispatch) => {
  const { success } = await api.deleteMessage(userId, messageId);

  if (!success) return;

  dispatch(deleteMessageSuccess(messageId));

  return success;
};

export const toggleActiveState = (userId, messageId, isActive) => async (dispatch) => {
  const newActiveState = !isActive;

  const { success } = await api.updateMessage(userId, messageId, { active: newActiveState });

  if (!success) return;

  dispatch(toggleActiveStateSuccess(messageId, newActiveState));

  return success;
};
