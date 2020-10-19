import Room from '../components/room/Room';
import * as actions from '../actions/room/roomAction';
import { connect } from 'react-redux';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
  roomList: state.roomData.roomList,
});


/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    retrieveRooms: () => dispatch(actions.retrieveRooms()),
    makeRoom: (roomName) => dispatch(actions.makeRoom(roomName))
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const RoomContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Room);


export default RoomContainer;
