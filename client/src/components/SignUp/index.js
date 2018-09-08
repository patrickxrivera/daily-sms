import React from 'react';
import { connect } from 'react-redux';
import AuthContainer from 'components/Auth/container';
import { registerUser } from 'redux/auth/actions';

const SignUp = ({ registerUser }) => (
  <AuthContainer
    submitFn={registerUser}
    subtextOne="We will send you a one-time verification code."
    subtextTwo="Message and data rates may apply."
    buttonText="Send"
  />
);

export default connect(null, { registerUser })(SignUp);
