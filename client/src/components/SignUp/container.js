import React, { Component } from 'react';

import SignUp from './';
import { registerUser } from 'api/user';

class SignUpContainer extends Component {
  state = {
    phoneNumber: {
      value: '',
      name: 'phoneNumber'
    },
    countryCode: {
      value: ''
    }
  };

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

    const { phoneNumber, countryCode } = this.state;

    const res = await registerUser({ phoneNumber, countryCode });

    console.log({ res });

    // isError(res) ? handleRequestError() : handleRequestSuccess()
  };

  render() {
    return (
      <SignUp
        {...this.state}
        handleBlur={this.handleBlur}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default SignUpContainer;
