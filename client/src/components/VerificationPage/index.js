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
} from '../SignUp/styles';

const VerificationPage = () => (
  <FilledBackground>
    <form>
      <InputWrapper>
        <div>
          <CountryCodeText>Enter Your Code</CountryCodeText>
          <Line />
          <Input placeholder="Your Verification Code" autoFocus />
          <Line />
          <ErrorText />
          <Subtext>Note: This can take a few seconds.</Subtext>
          <Subtext>Please retry if you don't receive the code.</Subtext>
        </div>
        <div>
          <Button>Verify</Button>
        </div>
      </InputWrapper>
    </form>
  </FilledBackground>
);

export default VerificationPage;
