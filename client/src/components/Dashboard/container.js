import React, { Component } from 'react';

import Dashboard from './';

class DashboardContainer extends Component {
  state = {
    showModal: true
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
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

export default DashboardContainer;
