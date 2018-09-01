import { isProdEnv } from './helpers';

const DEV_BASE_URL = 'http://localhost:5000/api';

const API_BASE_URL = isProdEnv() ? process.env.REACT_APP_PROD_BASE_URL : DEV_BASE_URL;

export const MESSAGE_ENDPOINT = `${API_BASE_URL}/message`;

export const GET_MESSAGE_LIST_ENDPOINT = `${API_BASE_URL}/messages`;

export const REGISTER_USER_ENDPOINT = `${API_BASE_URL}/register`;

export const VERIFY_USER_ENDPOINT = `${API_BASE_URL}/verify`;
