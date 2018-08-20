import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Header, Title, Text, Body, MainText, Description, Button } from './styles';

const LandingPage = () => (
  <Wrapper>
    <Header>
      <Title>DailySMS</Title>
      <Text>Sign Up</Text>
    </Header>
    <Body>
      <MainText>Send yourself a daily SMS</MainText>
      <Description>
        Wake up every morning to a motivational quote, a goal you want to reach, or something funny.
      </Description>
      <Link to="/register">
        <Button>Sign Up</Button>
      </Link>
    </Body>
  </Wrapper>
);

export default LandingPage;
