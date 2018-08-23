import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppStyles, Wrapper } from './styles';

import HomeController from 'components/HomeController';
import SignUpContainer from 'components/SignUp/container';
import VerificationPageContainer from 'components/VerificationPage/container';

const App = () => (
  <Wrapper>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeController} />
        <Route path="/register" component={SignUpContainer} />
        <Route path="/verify/:user_id" component={VerificationPageContainer} />
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
