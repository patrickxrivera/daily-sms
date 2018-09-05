import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from 'api';
import { getMessagesFromDb, toggleActiveState, deleteMessage } from 'redux/messages/actions';
import { getMessagesFromClient } from 'redux/messages/selectors';
import { getUserId, getIsDemoUser } from 'redux/auth/selectors';

import Table from './';

class TableContainer extends Component {
  componentDidMount() {
    const { getMessagesFromDb, userId, isDemoUser } = this.props;

    if (!isDemoUser) {
      getMessagesFromDb(userId);
    }
  }

  toggleSwitch = (messageId, active) => () => {
    const { userId, toggleActiveState, isDemoUser } = this.props;
    toggleActiveState(userId, messageId, active, isDemoUser);
  };

  handleDeleteClick = (messageId) => () => {
    const { userId, deleteMessage, isDemoUser } = this.props;
    deleteMessage(userId, messageId, isDemoUser);
  };

  render() {
    return (
      <Table
        {...this.state}
        {...this.props}
        toggleSwitch={this.toggleSwitch}
        handleDeleteClick={this.handleDeleteClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userId: getUserId(state),
  messages: getMessagesFromClient(state),
  isDemoUser: getIsDemoUser(state)
});

export default connect(mapStateToProps, { getMessagesFromDb, toggleActiveState, deleteMessage })(
  TableContainer
);
