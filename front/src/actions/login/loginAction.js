import * as types from './ActionTypes';

export const loginRequest = userName => dispatch => {
  dispatch(login());
  try {
    console.log('LOGIN SUSSESS!')
    sessionStorage.setItem('userName', userName);
    dispatch(loginSuccess(userName));
  } catch (error) {
    dispatch(loginFailure());        
  }    
}

export const login = () => {
  return {
    type: types.LOGIN
  }
};
export const loginSuccess = userName => {
  return {
    type: types.LOGIN_SUCCESS,
    userName: userName
  }
};
export const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  }
};
