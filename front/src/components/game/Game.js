import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class Game extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div>game</div>
        <div className="InputArea">
        </div>
      </div>
    );
  }
}
export default withRouter(Game);

