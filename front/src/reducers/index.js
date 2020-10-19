import loginInfo from './loginInfo'
import roomData from './room'


import { combineReducers } from 'redux';


const reducers = combineReducers({
    loginInfo: loginInfo,
    roomData: roomData,
});

export default reducers;
