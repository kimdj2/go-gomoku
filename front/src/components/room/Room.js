import React, { Component } from 'react';
import RoomItem from './RoomItem'
import { withRouter } from "react-router-dom";


class Room extends Component {

  constructor() {
    super();
    this.state = {
      roomName : ""
    }
  }

  componentDidMount(){
    this.props.retrieveRooms();
  }

  handleClick = () => {
    this.props.makeRoom(this.state.roomName);
  }

  handleChange = (e) => {
    this.setState({
      roomName: e.target.value
    });
  }

  moveRoom = (roomId) => {
    this.props.history.push('/room/'+ roomId)
  };

  render() {
    const { roomList } = this.props;
    console.log(this.props);
    return (
      <div>
        <div>Go! Gomoku</div>
        <div className="InputArea">
          <input
            value={this.state.roomName}
            onChange={this.handleChange}
            type="text"
            placeholder=""
          />
          <button onClick={this.handleClick}>Make Room</button>
        </div>
        { 
          roomList.map(room => 
            (<RoomItem key={room.id} id={room.id} name={room.name} moveRoom={this.moveRoom} />) 
          )             
        }
      </div>
    );
  }
}
export default withRouter(Room);

