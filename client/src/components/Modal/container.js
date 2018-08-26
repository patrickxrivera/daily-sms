import React, { Component } from 'react';

import Modal from './';

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
  };

  handleFormSubmit = (fields) => {
    console.log({ fields });
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

export default ModalContainer;
