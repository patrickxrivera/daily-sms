const CREATED = 201;

const isError = (targetStatusCode) => (res) => res.status !== targetStatusCode;

export const isCreateError = isError(CREATED);
