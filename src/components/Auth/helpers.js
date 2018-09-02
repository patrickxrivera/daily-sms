export const isDigit = ({ key }) => key !== 'Backspace';

export const isValidSubmission = ({ key }, isDisabled) => key === 'Enter' && !isDisabled;

export const isInvalidKey = ({ key }) => isNaN(key) && key !== 'Backspace';
