import React, { Component } from 'react';

import SignUp from './';
import api from 'api';
import { isCreateError } from 'utils/errors';

class SignUpContainer extends Component {
  state = {
    phoneNumber: {
      value: '',
      name: 'phoneNumber',
      errorText: ''
    },
    countryCode: {
      value: 1
    },
    renderLoadingIndicator: false
  };

  handleKeyDown = async (e) => {
    const { value } = this.state.phoneNumber;

    if (isNaN(e.key) && e.key !== 'Backspace') e.preventDefault();

    if (e.key !== 'Backspace') return;

    e.preventDefault();

    await this.setState({
      phoneNumber: {
        ...this.state.phoneNumber,
        value: value.slice(0, -1)
      }
    });
  };

  // TODO:
  // 1) dry up handlers
  // 2) add phone number auto formatting
  // 3) return error if given non-numbers
  // 4) add redux form for validation and errors?
  handleInputChange = (e) => {
    const { phoneNumber } = this.state;
    const phoneNumberLength = phoneNumber.value.length;

    if (phoneNumberLength === 14) return;

    let value;

    switch (phoneNumberLength) {
      case 0:
        value = `(${e.target.value}`;
        break;
      case 3:
        value = `${e.target.value}) `;
        break;
      case 8:
        value = `${e.target.value}-`;
        break;
      default:
        value = e.target.value;
        break;
    }

    this.setState({
      phoneNumber: {
        ...this.state.phoneNumber,
        value
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ renderLoadingIndicator: true });

    const { phoneNumber, countryCode } = this.state;

    const res = await api.registerUser({ phoneNumber, countryCode });

    isCreateError(res) ? this.handleRequestError(res) : this.handleRequestSuccess(res);
  };

  handleRequestSuccess = ({ data }) => {
    // TODO:
    // 1) save accessToken and refreshToken to redux store
    // 2) handle if user is already verified
    this.props.history.push(`/verify/${data.user_id}`);
  };

  handleRequestError = (errorText) => {
    this.setState({
      phoneNumber: {
        ...this.state.phoneNumber,
        errorText
      },
      renderLoadingIndicator: false
    });
  };

  render = () => (
    <SignUp
      {...this.state}
      handleSubmit={this.handleSubmit}
      handleInputChange={this.handleInputChange}
      handleKeyDown={this.handleKeyDown}
    />
  );
}

export default SignUpContainer;
