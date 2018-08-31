import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppStyles, Wrapper, theme } from './styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import HomeController from 'components/HomeController';
import SignUpContainer from 'components/SignUp/container';
import VerificationPageContainer from 'components/VerificationPage/container';
import DashboardContainer from 'components/Dashboard/container';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeController} />
          <Route path="/register" component={SignUpContainer} />
          <Route path="/verify/:user_id" component={VerificationPageContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
        </Switch>
      </Router>
    </Wrapper>
  </MuiThemeProvider>
);

export default App;
