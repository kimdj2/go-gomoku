import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GameContainer from '../containers/GameContainer';
import LoginContainer from '../containers/LoginContainer';
import RoomContainer from '../containers/RoomContainer';

import Auth from '../hoc/Auth'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={RoomContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/room/:id" component={Auth(GameContainer)} />
      </Router>
    </Provider>
  );
};

export default Root;
