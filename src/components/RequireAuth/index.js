import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIsAuthenticated } from 'redux/auth/selectors';

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      this.checkAuthStatus();
    }

    componentWillUpdate() {
      this.checkAuthStatus();
    }

    checkAuthStatus = () => {
      const { isAuthenticated, history } = this.props;

      if (!isAuthenticated) history.push('/');
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: getIsAuthenticated(state)
  });

  return connect(mapStateToProps)(Authentication);
};
