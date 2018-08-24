import React, { Component } from 'react';

import Modal from './';

class ModalContainer extends Component {
  render() {
    return <Modal {...this.props} />;
  }
}

export default ModalContainer;
