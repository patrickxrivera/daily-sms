const CREATED = 201;
const OK = 200;

const isError = (targetStatusCode) => (res) => res.status !== targetStatusCode;

export const isCreateError = isError(CREATED);

export const isOkError = isError(OK);
