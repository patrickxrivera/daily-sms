import React from 'react';
import { connect } from 'react-redux';
import LandingPageContainer from 'components/LandingPage/container';

import { getIsAuthenticated } from 'redux/auth/selectors';
import { setDemoUser } from 'redux/auth/actions';

const routeToDashboard = ({ history }) => {
  history.push('/dashboard');
};

const HomeController = ({ isAuthenticated, ...rest }) =>
  isAuthenticated ? routeToDashboard(rest) : <LandingPageContainer {...rest} />;

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps, { setDemoUser })(HomeController);
