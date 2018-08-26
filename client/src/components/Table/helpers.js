const TEXT_LENGTH_LIMIT = 42;

export const shorten = (text) =>
  text.length < TEXT_LENGTH_LIMIT
    ? text
    : text
        .split('')
        .slice(0, TEXT_LENGTH_LIMIT)
        .join('')
        .concat('...');
