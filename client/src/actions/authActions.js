import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from './types';
import { getAlert } from './alertActions';
import axios from 'axios';

export const checkUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/auth/checkuser');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
    });
  }
}

export const loginUser = (email, password) => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/auth/login', 
      JSON.stringify({ email, password }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    const name = getState().auth.user.firstName;
    dispatch(getAlert(`Welcome ${name}!`, 'Log In Success', 'success'));
  } catch (err) {
    dispatch(getAlert(err.response.data.msg, 'Log In Error', 'danger'));
    dispatch({
      type: LOGIN_ERROR,
    });
  }
}

export const registerUser = (email, firstName, lastName, password, password2) => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/auth/register', 
      JSON.stringify({ email, firstName, lastName, password, password2 }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    const name = getState().auth.user.firstName;
    dispatch(getAlert(`Welcome ${name}!`, 'Sign Up Success', 'success'));
  } catch (err) {
    dispatch(getAlert(err.response.data.msg, 'Sign Up Error', 'danger'));
    dispatch({
      type: REGISTER_ERROR,
    });
  }
}

export const logoutUser = () => async dispatch => {
  try {
    await axios.get('/api/auth/logout');
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    dispatch(getAlert('You are logged out', 'Log Out Success', 'success'));
  } catch (err) {
    dispatch({
      type: LOGOUT_ERROR,
    });
  }
}
