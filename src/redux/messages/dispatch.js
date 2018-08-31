export const addMessageSuccess = (message) => ({
  type: 'ADD_MESSAGE',
  message
});

export const getMessagesFromDbSuccess = (messages) => ({
  type: 'GET_MESSAGES',
  messages
});

export const deleteMessageSuccess = (messageId) => ({
  type: 'DELETE_MESSAGE',
  messageId
});

export const toggleActiveStateSuccess = (messageId, active) => ({
  type: 'TOGGLE_ACTIVE_STATE',
  messageId,
  active
});
