import React from 'react';

const RoomItem = ({id, name, moveRoom}) => {


  return (
    <div onClick={() => moveRoom(id)}>
      <span className="ChatArea">
        {name}
      </span>
    </div>
  );
};
export default RoomItem;
