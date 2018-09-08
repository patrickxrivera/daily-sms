import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getVerified } from 'redux/auth/selectors';

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      this.checkAuthStatus();
    }

    componentWillUpdate() {
      this.checkAuthStatus();
    }

    checkAuthStatus = () => {
      const { verified, history } = this.props;

      // if (!verified) history.push('/');
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    verified: getVerified(state)
  });

  return connect(mapStateToProps)(Authentication);
};
