import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';
const REGISTER_USER_ENDPOINT = `${API_BASE}/register`;

const handleRegisterUserSuccess = ({ data }) => {
  console.log({ data });
  return data;
};

const isInvalidPhoneNumber = (message) => message['phone_number'];

const handleRegisterUserError = ({ response }) => {
  const { message } = response.data;
  return isInvalidPhoneNumber(message) ? message['phone_number'] : message;
};

const normalizeUserData = ({ phoneNumber, countryCode }) => ({
  phone_number: phoneNumber,
  country_code: countryCode
});

export const registerUser = (userData) => {
  const normalizedUserData = normalizeUserData(userData);

  return axios
    .post(REGISTER_USER_ENDPOINT, normalizedUserData)
    .then(handleRegisterUserSuccess)
    .catch(handleRegisterUserError);
};
