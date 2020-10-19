import * as types from '../actions/room/ActionTypes';

const initialState = {
    roomList: [],
    isLoading: false
};

const roomInfo = (state = initialState, action) => {
    switch(action.type) {
        case types.ROOM_PENDING:
            return {
              roomList: [],
              isLoading: true
            };
        case types.ROOM_SUCCESS:
            return {
                roomList: action.roomList,
                isLoading: false
            };
        case types.ROOM_FAILURE:
            return {
                roomList: [],
                isLoading: false
            };
        default:
            return state;
    }
}

export default roomInfo;
