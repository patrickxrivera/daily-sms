export const registerUserSuccess = (credentials) => ({
  type: 'SAVE_AUTH_CREDENTIALS',
  credentials
});

export const verifyUserSuccess = () => ({
  type: 'VERIFY_USER'
});
