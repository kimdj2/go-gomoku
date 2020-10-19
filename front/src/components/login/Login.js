import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName:''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleClick = () => {
    this.props.onLogin(this.state.userName)
    this.props.history.push('/')
  }
  handleChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div>Go! Gomoku</div>
        <div className="InputArea">
          <input
            value={this.state.userName}
            onChange={this.handleChange}
            type="text"
            placeholder=""
          />
          <button onClick={this.handleClick}>Login</button>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);

