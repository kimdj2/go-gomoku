import React from 'react';
import PropTypes from 'prop-types';
import './Chat.scss';

const Chat = ({number, color, onChat, onDecrement, onSetColor}) => {
    return (
      <div>
        <div className="ChatArea">
        </div>
        <div className="InputArea">
          <input type="text" />
          <input type="button" onClick={onChat} />
        </div>
      </div>
    );
};

Chat.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onChat: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Chat.defaultProps = {
    number: 0,
    color: 'black',
    onChat: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Chat;
