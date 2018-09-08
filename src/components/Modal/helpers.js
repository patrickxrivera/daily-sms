const FREQUENCY = ['Every day', 'Weekdays', 'Weekends'];

export const required = (value) => (value || typeof value === 'number' ? null : 'Required');

export const validFrequency = (value) => (FREQUENCY.includes(value) ? null : 'Invalid');
