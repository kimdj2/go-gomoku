import * as types from './ActionTypes';
import API from '../../utils/API'

export const retrieveRooms = () => async(dispatch) => {
  dispatch(pending());

  try {
    const res = await API.get('/rooms');
    console.log(res);
    dispatch(retrieveSuccess(res.data));
  } catch (error) {
    dispatch(retrieveFailure());
  }    
}

export const makeRoom = (roomName) => async(dispatch) => {
  dispatch(pending());
  try {
    await API.post('/rooms', { name: roomName });
    const res = await API.get('/rooms');
    dispatch(retrieveSuccess(res.data));
  } catch (error) {
    dispatch(retrieveFailure());
  }    
}

export const pending = () => {
  return {
    type: types.ROOM_PENDING
  }
};
export const retrieveSuccess = roomList => {
  console.log(roomList);
  return {
    type: types.ROOM_SUCCESS,
    roomList: roomList ? roomList : []
  }
};
export const retrieveFailure = () => {
  return {
    type: types.ROOM_FAILURE,
  }
};
