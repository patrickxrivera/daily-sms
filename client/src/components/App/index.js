import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppStyles, Wrapper } from './styles';

import HomeController from 'components/HomeController';
import SignUpContainer from 'components/SignUp/container';

const App = () => (
  <Wrapper>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeController} />
        <Route path="/register" component={SignUpContainer} />
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
