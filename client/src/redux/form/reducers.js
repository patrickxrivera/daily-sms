export default {
  create_message: (state, action) => {
    switch (action.type) {
      case 'CLEAR_FIELDS':
        return undefined;
      default:
        return state;
    }
  }
};
