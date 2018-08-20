import React from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';

export const FilledBackground = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 100vh;
  position: absolute;
  background-attachment: fixed;
`;

export const InputWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;
  width: 400px;
  height: 400px;
  margin: 5rem auto;
  padding: 1.75rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Line = styled.hr`
  width: 100%;
  opacity: 0.2;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;
export const CountryCodeText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  border: none;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    opacity: 0.3;
  }
`;

export const Subtext = styled.div`
  opacity: 0.4;
  font-size: 1rem;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  color: #fff;
  padding: 0.6em 0.8em;
  outline: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2222222;
  text-align: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  cursor: pointer;
  background: ${colors.primary};
  width: 100%;
  height: 50px;

  &:hover {
    background: rgba(9, 132, 280, 1);
  }
`;

const SignUp = () => (
  <FilledBackground>
    <InputWrapper>
      <div>
        <CountryCodeText>USA (+1)</CountryCodeText>
        <Line />
        <Input placeholder="Your Phone Number" />
        <Line />
        <Subtext>We will send you a one-time verification code.</Subtext>
        <Subtext>Message and data rates may apply.</Subtext>
      </div>
      <div>
        <Button>Send</Button>
      </div>
    </InputWrapper>
  </FilledBackground>
);

export default SignUp;
