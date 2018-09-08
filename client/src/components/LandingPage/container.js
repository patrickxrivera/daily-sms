import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LandingPage from './';

class LandingPageContainer extends Component {
  handleDemoClick = () => {
    const { setDemoUser, history } = this.props;

    setDemoUser();
    history.push('/dashboard');
  };

  render() {
    return <LandingPage handleDemoClick={this.handleDemoClick} />;
  }
}

export default withRouter(LandingPageContainer);
