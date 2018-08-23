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

  // TODO:
  // 1) dry up handlers
  // 2) add phone number auto formatting
  // 3) return error if given non-numbers
  // 4) add redux form for validation and errors?
  handleInputChange = (e) => {
    const propName = e.target.name;

    this.setState({
      [propName]: {
        ...this.state[propName],
        value: e.target.value
      }
    });
  };

  handleBlur = (e) => {
    const propName = e.target.name;

    this.setState({
      [propName]: {
        ...this.state[propName],
        isFocused: true
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
    console.log({ data });
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
      handleBlur={this.handleBlur}
      handleSubmit={this.handleSubmit}
      handleInputChange={this.handleInputChange}
    />
  );
}

export default SignUpContainer;
