import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from 'api';
import VerificationPage from './';
import { isOkError } from 'utils/errors';
import { verifyUser } from 'redux/auth/actions';
import { isValidSubmission, isInvalidKey, isDigit } from '../Auth/helpers';
import { queryUrlParams } from './helpers';

class VerificationPageContainer extends Component {
  state = {
    verificationCode: {
      value: '',
      name: 'verificationCode',
      errorText: ''
    },
    renderLoadingIndicator: false,
    isDisabled: false,
    userId: null
  };

  componentDidMount() {
    this.getUserId();
  }

  getUserId = () => {
    const userId = queryUrlParams(this.props);
    this.setState({ userId });
  };

  handleKeyDown = async (e) => {
    const { isDisabled, verificationCode: { value } } = this.state;

    switch (true) {
      case isValidSubmission(e, isDisabled):
        this.handleSubmit(e);
        return;
      case isInvalidKey(e):
        e.preventDefault();
        return;
      case isDigit(e):
        return;
      default:
        e.preventDefault();
        break;
    }

    await this.setState({
      verificationCode: {
        ...this.state.verificationCode,
        errorText: '',
        value: value.slice(0, -1)
      }
    });
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

    this.setState({ renderLoadingIndicator: true });

    const { verificationCode, userId } = this.state;
    const { verifyUser } = this.props;

    const { success, ...res } = await verifyUser(verificationCode, userId);

    success ? this.handleRequestSuccess() : this.handleRequestError(res);
  };

  handleRequestSuccess = () => {
    this.props.history.push(`/dashboard`);
  };

  handleRequestError = (error) => {
    this.setState({
      verificationCode: {
        ...this.state.verificationCode,
        errorText: error.message
      },
      renderLoadingIndicator: false
    });
  };

  render = () => (
    <VerificationPage
      {...this.state}
      handleSubmit={this.handleSubmit}
      handleInputChange={this.handleInputChange}
      handleKeyDown={this.handleKeyDown}
    />
  );
}

export default connect(null, { verifyUser })(VerificationPageContainer);
