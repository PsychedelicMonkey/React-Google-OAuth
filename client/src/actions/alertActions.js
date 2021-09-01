import { GET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

export const getAlert = (msg, alertType, color) => dispatch => {
  const uuid = uuidv4();

  dispatch({
    type: GET_ALERT,
    payload: {
      msg,
      alertType,
      color,
      uuid,
    }
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: uuid,
    });
  }, 5000);
}
