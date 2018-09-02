import React from 'react';
import { connect } from 'react-redux';
import AuthContainer from 'components/Auth/container';
import { signInUser } from 'redux/auth/actions';

const SignIn = ({ signInUser }) => (
  <AuthContainer submitFn={signInUser} subtextOne="Welcome back!" buttonText="Submit" />
);

export default connect(null, { signInUser })(SignIn);
