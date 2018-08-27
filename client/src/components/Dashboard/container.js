import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from './';
import { clearFields } from 'redux/form/actions';

class DashboardContainer extends Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
    this.props.clearFields();
  };

  render() {
    return (
      <Dashboard
        {...this.state}
        handleOpenModal={this.handleOpenModal}
        handleCloseModal={this.handleCloseModal}
      />
    );
  }
}

export default connect(null, { clearFields })(DashboardContainer);
