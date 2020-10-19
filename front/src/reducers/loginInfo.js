import * as types from '../actions/login/ActionTypes';

const initialState = {
    userName: "",
    isLoggedIn: false,
    isLoading: false
};

const loginInfo = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN:
            return {
              isLoading: true
            };
        case types.LOGIN_SUCCESS:
            return {
                userName: action.userName,
                isLoggedIn: true,
                isLoading: false
            };
        case types.LOGIN_FAILURE:
            return {
                userName: "",
                isLoggedIn: false,
                isLoading: false
            };
        default:
            return state;
    }
}

export default loginInfo;
