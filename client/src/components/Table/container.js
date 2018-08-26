import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMessages } from 'redux/messages/selectors';

import Table from './';

class TableContainer extends Component {
  state = {
    on: false
  };

  toggleSwitch = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    return (
      <Table {...this.state} messages={this.props.messages} toggleSwitch={this.toggleSwitch} />
    );
  }
}

const mapStateToProps = (state) => ({
  messages: getMessages(state)
});

export default connect(mapStateToProps)(TableContainer);
