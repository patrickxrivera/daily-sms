import React, { Component } from 'react';

import api from 'api';
import VerificationPage from './';
import { isOkError } from 'utils/errors';

const queryUrlParams = ({ location }) => location.pathname.split('/').pop();

class VerificationPageContainer extends Component {
  state = {
    verificationCode: {
      value: '',
      name: 'verificationCode',
      errorText: ''
    },
    renderLoadingIndicator: false,
    userId: null
  };

  componentDidMount() {
    this.getUserId();
  }

  getUserId = () => {
    const userId = queryUrlParams(this.props);
    this.setState({ userId });
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

  handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: add validation that verificationCode must be an integer
    // TODO: look at authy validation rules for token verification

    this.setState({ renderLoadingIndicator: true });

    const { verificationCode, userId } = this.state;

    const res = await api.verifyUser(verificationCode, userId);

    isOkError(res) ? this.handleRequestError(res) : this.handleRequestSuccess(res);
  };

  handleRequestSuccess = ({ data }) => {
    // TODO:
    // 1) save accessToken and refreshToken to redux store
    // 2) handle if user is already verified
    console.log({ data });
    this.props.history.push(`/dashboard`);
  };

  handleRequestError = (errorText) => {
    this.setState({
      verificationCode: {
        ...this.state.verificationCode,
        errorText
      },
      renderLoadingIndicator: false
    });
  };

  render = () => (
    <VerificationPage
      {...this.state}
      handleSubmit={this.handleSubmit}
      handleInputChange={this.handleInputChange}
    />
  );
}

export default VerificationPageContainer;
