export const isInvalidPhoneNumber = (message) => message['phone_number'];

export const formatUserData = ({ phoneNumber, countryCode }) => ({
  phone_number: phoneNumber.value,
  country_code: countryCode.value
});

export const formatErrorMessage = (errorText, { status }) => ({
  errorText,
  status
});
