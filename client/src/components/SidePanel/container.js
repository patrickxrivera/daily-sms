import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOutUser } from 'redux/auth/actions';
import SidePanel from './';

class SidePanelContainer extends Component {
  handleLogOut = () => {
    const { history, logOutUser } = this.props;

    logOutUser();

    history.push('/');
  };

  render() {
    return <SidePanel handleLogOut={this.handleLogOut} />;
  }
}

export default connect(null, { logOutUser })(withRouter(SidePanelContainer));
