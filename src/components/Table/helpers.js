const TEXT_LENGTH_LIMIT = 42;

export const shorten = (text) =>
  text.length < TEXT_LENGTH_LIMIT
    ? text
    : text
        .split('')
        .slice(0, TEXT_LENGTH_LIMIT)
        .join('')
        .concat('...');

const isAM = (hour) => hour < 12;

const getHour = (time) => Number(time.slice(0, 2));

export const formatTime = (time) => {
  const hour = getHour(time);

  if (isAM(hour)) {
    if (hour === '00') return `12${time.slice(2)} AM`;
    return time[0] === '0' ? `${time.slice(1)} AM` : `${time} AM`;
  }

  const newHour = hour % 12;

  return `${newHour === 0 ? 12 : newHour}:${time.slice(3)} PM`;
};
