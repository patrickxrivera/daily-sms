export const isInvalidPhoneNumber = (message) => message['phone_number'];

export const normalizeUserData = ({ phoneNumber, countryCode }) => ({
  phone_number: phoneNumber.value,
  country_code: countryCode.value
});
