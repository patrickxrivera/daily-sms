import React from 'react';

import {
  FilledBackground,
  InputWrapper,
  Input,
  Button,
  CountryCodeText,
  Line,
  Subtext,
  ErrorText
} from './styles';

const SignUp = ({ handleSubmit, handleInputChange, handleBlur, phoneNumber }) => (
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
            onFocus={handleBlur}
            name={phoneNumber.name}
            autoFocus
          />
          <Line />
          <ErrorText>{phoneNumber.errorText}</ErrorText>
          <Subtext>We will send you a one-time verification code.</Subtext>
          <Subtext>Message and data rates may apply.</Subtext>
        </div>
        <div>
          <Button onClick={handleSubmit}>Send</Button>
        </div>
      </InputWrapper>
    </form>
  </FilledBackground>
);

export default SignUp;
