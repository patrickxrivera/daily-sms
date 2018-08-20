import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppStyles, Wrapper } from './styles';

import HomeController from 'components/HomeController';

const App = () => (
  <Wrapper>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeController} />
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
