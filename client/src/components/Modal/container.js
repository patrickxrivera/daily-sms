import React, { Component } from 'react';

import Modal from './';

class ModalContainer extends Component {
  state = {
    showCheckbox: false
  };

  handleOpenCheckbox = () => {
    this.setState({ showCheckbox: true });
  };

  handleCloseCheckbox = () => {
    this.setState({ showCheckbox: false });
  };

  render() {
    return (
      <Modal
        {...this.state}
        {...this.props}
        handleOpenCheckbox={this.handleOpenCheckbox}
        handleCloseCheckbox={this.handleCloseCheckbox}
      />
    );
  }
}

export default ModalContainer;
