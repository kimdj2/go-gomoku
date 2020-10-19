import React from "react";
import { useDispatch } from "react-redux";
import * as actions from '../actions/login/loginAction';

export default Component => {
  const AuthCheck = (props) => {
    const dispatch = useDispatch();
    const userName = sessionStorage.getItem('userName');
    if (userName) {
      dispatch(actions.loginSuccess(userName));
    } else {
      props.history.push("/login");
    }  
    return <Component />;
  }
  return AuthCheck;
}
