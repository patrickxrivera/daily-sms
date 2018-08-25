import React, { Component } from 'react';

import Modal from './';

class ModalContainer extends Component {
  state = {
    showCheckbox: false
  };

  handleOpenCheckbox = () => {
    this.setState({ showCheckbox: true });
  };

  render() {
    return <Modal {...this.state} {...this.props} handleOpenCheckbox={this.handleOpenCheckbox} />;
  }
}

export default ModalContainer;
