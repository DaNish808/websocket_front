import { POST } from '../constants';

export function post(message) {

  return (dispatch, getState) => {
    dispatch({
      type: POST,
      payload: {
        user: getState().me.username,
        message,
        timestamp: new Date()
      }
    });
  };
}