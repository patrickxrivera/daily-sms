import React, { Component } from 'react';

import SignUp from './';
import { registerUser } from 'api/user';

class SignUpContainer extends Component {
  state = {
    phoneNumber: '904',
    countryCode: '1'
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { phoneNumber, countryCode } = this.state;

    const data = await registerUser({ phoneNumber, countryCode });
    console.log({ data });
  };

  render() {
    return <SignUp {...this.state} handleSubmit={this.handleSubmit} />;
  }
}

export default SignUpContainer;
