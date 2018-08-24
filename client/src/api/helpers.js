export const isInvalidPhoneNumber = (message) => message['phone_number'];

// TODO: abstract these format functions
export const formatUserData = ({ phoneNumber, countryCode }) => ({
  phone_number: phoneNumber.value,
  country_code: countryCode.value
});

export const formatVerificationCode = (verificationCode) => ({
  verification_code: verificationCode.value
});

export const formatErrorMessage = (errorText, { status }) => ({
  errorText,
  status
});
