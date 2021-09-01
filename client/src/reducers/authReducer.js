import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        isLoading: false,
      }
    case LOGOUT_SUCCESS:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
    case LOGOUT_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
}
