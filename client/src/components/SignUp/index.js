import React from 'react';
import ReactLoading from 'react-loading';

import {
  FilledBackground,
  InputWrapper,
  Input,
  CountryCodeText,
  Line,
  Subtext,
  ErrorText
} from './styles';
import Button from 'components/Button';

const LOADING_SIZE = 25;

const renderButtonContent = (renderLoadingIndicator) =>
  renderLoadingIndicator ? (
    <ReactLoading type="spinningBubbles" height={LOADING_SIZE} width={LOADING_SIZE} />
  ) : (
    'Send'
  );

const SignUp = ({ handleSubmit, handleInputChange, renderLoadingIndicator, phoneNumber }) => (
  <FilledBackground>
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <div>
          <CountryCodeText>USA (+1)</CountryCodeText>
          <Line />
          <Input
            placeholder="Your Phone Number"
            value={phoneNumber.value}
            onChange={handleInputChange}
            name={phoneNumber.name}
            autoFocus
          />
          <Line />
          <ErrorText>{phoneNumber.errorText}</ErrorText>
          <Subtext>We will send you a one-time verification code.</Subtext>
          <Subtext>Message and data rates may apply.</Subtext>
        </div>
        <div>
          <Button width="100%" onClick={handleSubmit}>
            {renderButtonContent(renderLoadingIndicator)}
          </Button>
        </div>
      </InputWrapper>
    </form>
  </FilledBackground>
);

export default SignUp;
