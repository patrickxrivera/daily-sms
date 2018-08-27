import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from 'api';
import { getMessagesFromDb, toggleActiveState, deleteMessage } from 'redux/messages/actions';
import { getMessagesFromClient } from 'redux/messages/selectors';
import { getUserId } from 'redux/auth/selectors';

import Table from './';

class TableContainer extends Component {
  componentDidMount() {
    const { getMessagesFromDb, userId } = this.props;

    getMessagesFromDb(userId);
  }

  toggleSwitch = (messageId, active) => () => {
    const { userId, toggleActiveState } = this.props;
    toggleActiveState(userId, messageId, active);
  };

  handleDeleteClick = (messageId) => () => {
    const { userId, deleteMessage } = this.props;
    deleteMessage(userId, messageId);
  };

  render() {
    return (
      <Table
        {...this.state}
        messages={this.props.messages}
        toggleSwitch={this.toggleSwitch}
        handleDeleteClick={this.handleDeleteClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userId: getUserId(state),
  messages: getMessagesFromClient(state)
});

export default connect(mapStateToProps, { getMessagesFromDb, toggleActiveState, deleteMessage })(
  TableContainer
);
