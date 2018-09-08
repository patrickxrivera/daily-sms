export const getUserId = ({ auth }) => auth.user_id;

export const getIsAuthenticated = ({ auth }) => auth.isAuthenticated;

export const getVerified = ({ auth }) => auth.verified;

export const getIsDemoUser = ({ auth }) => auth.isDemoUser;
