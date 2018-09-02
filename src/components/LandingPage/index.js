import React from 'react';
import {
  Wrapper,
  Header,
  Title,
  Text,
  Body,
  MainText,
  Description,
  Button,
  SignUpText,
  StyledLink
} from './styles';

const LandingPage = () => (
  <Wrapper>
    <Header>
      <div>
        <Title>DailySMS</Title>
      </div>
      <div>
        <StyledLink to="/sign-in" style={{ marginRight: '1rem' }}>
          <Text>Sign In</Text>
        </StyledLink>
        <StyledLink to="/register">
          <Text>Sign Up</Text>
        </StyledLink>
      </div>
    </Header>
    <Body>
      <MainText>Send yourself a daily SMS</MainText>
      <Description>
        Wake up every morning to a motivational quote, a goal you want to reach, or something funny.
      </Description>
      <StyledLink to="/register">
        <Button>Sign Up</Button>
      </StyledLink>
      <StyledLink to="/sign-in">
        <SignUpText>Already signed up? Sign in here.</SignUpText>
      </StyledLink>
    </Body>
  </Wrapper>
);

export default LandingPage;
