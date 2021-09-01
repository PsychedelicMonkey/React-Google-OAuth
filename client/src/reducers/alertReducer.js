import { GET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
  alerts: [],
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, payload],
      }
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(a => a.uuid !== payload),
      }
    default:
      return state;
  }
}
