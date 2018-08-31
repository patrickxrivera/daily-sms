import { handleActions } from 'redux-actions';

const initialState = {
  accessToken:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzUzMDkxMzAsIm5iZiI6MTUzNTMwOTEzMCwianRpIjoiYThmMDVkZGItZWNlYy00ZWQ3LTk1ZGQtZWU2OWRiNmQ4YjVjIiwiZXhwIjoxNTM1MzEwMDMwLCJpZGVudGl0eSI6OTA0NTYyMDI5OSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.qiXE9yJOilAy5zzPpyh_yDx8la2Znus5vStM0AA_1HA',
  refreshToken:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MzUzMDkxMzAsIm5iZiI6MTUzNTMwOTEzMCwianRpIjoiMWYxNjE5NWMtYjFiMC00NzU1LTg4MmEtODFkMWEwYzVjZmYwIiwiaWRlbnRpdHkiOjkwNDU2MjAyOTksInR5cGUiOiJyZWZyZXNoIn0.YWoypB_3nPH3bxLk6MT2KS8P3osK0-JXTGnlLkuQr-s',
  userId: 1
};

export default handleActions(
  {
    ADD_AUTH_CREDENTIALS: (state, action) => ({
      ...state
    })
  },
  initialState
);
