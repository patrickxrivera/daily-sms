import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from './';
import { getUserId } from 'redux/auth/selectors';
import { addMessage } from 'redux/messages/actions';
import { clearFields } from 'redux/form/actions';

const DAYS = ['Every day', 'Weekdays', 'Weekends'];

const updateDays = (name) => (acc, curr) =>
  curr === name ? { ...acc, [curr]: true } : { ...acc, [curr]: false };

class ModalContainer extends Component {
  state = {
    showCheckbox: false,
    days: {
      'Every day': false,
      Weekdays: false,
      Weekends: false
    },
    checkedDay: null
  };

  initialState = this.state;

  handleOpenCheckbox = () => {
    this.setState({ showCheckbox: true });
  };

  handleCloseCheckbox = () => {
    this.setState({ showCheckbox: false });
  };

  handleChange = (changeFn) => (e) => {
    const { name } = e.target;

    const updatedDays = DAYS.reduce(updateDays(name), {});

    this.setState({ days: { ...updatedDays } });

    changeFn('frequency', name);

    this.handleCloseCheckbox();
  };

  handleFormSubmit = async (fields) => {
    const { addMessage, handleCloseModal, clearFields, userId } = this.props;

    addMessage({ ...fields, user_id: userId });
    this.resetState();
    handleCloseModal();
    clearFields();
  };

  resetState = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <Modal
        {...this.state}
        {...this.props}
        handleOpenCheckbox={this.handleOpenCheckbox}
        handleCloseCheckbox={this.handleCloseCheckbox}
        handleChange={this.handleChange}
        handleFormSubmit={this.handleFormSubmit}
        handleKeyDown={this.handleKeyDown}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userId: getUserId(state)
});

export default connect(mapStateToProps, { addMessage, clearFields })(ModalContainer);
