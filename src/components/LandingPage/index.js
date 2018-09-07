import React from 'react';
import { Github, Twitter, Linkedin, Download, Search, Headphones } from 'react-feather';
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
  StyledLink,
  SecondaryButton,
  DemoText,
  FeaturesWrapper,
  FeaturesHeadingText,
  FeaturesSubheadingText,
  FeaturesIconWrapper,
  FeaturesIconsWrapper,
  FeaturesDescriptionText,
  StyledATag,
  Footer,
  CopyrightText,
  SocialIcons
} from './styles';

import colors from 'utils/colors';

const ICON_SIZE = 40;
const SOCIAL_ICON_SIZE = 16;

const LandingPage = ({ handleDemoClick }) => (
  <Wrapper>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header>
        <div>
          <Title>DailySMS</Title>
        </div>
        <div>
          <StyledLink to="/signin" style={{ marginRight: '1rem' }}>
            <Text>Sign In</Text>
          </StyledLink>
          <StyledLink to="/register">
            <Text>Sign Up</Text>
          </StyledLink>
          <DemoText onClick={handleDemoClick}>Demo</DemoText>
        </div>
      </Header>
      <Body>
        <MainText>Send yourself a daily SMS</MainText>
        <Description>
          Wake up every morning to a motivational quote, a goal you want to reach, or something
          funny.
        </Description>
        <StyledLink to="/register">
          <Button>Sign Up</Button>
        </StyledLink>
        <SecondaryButton onClick={handleDemoClick}>Demo</SecondaryButton>
        <StyledLink to="/signin">
          <SignUpText>Already signed up? Sign in here.</SignUpText>
        </StyledLink>
      </Body>
      <Footer>
        <CopyrightText>© Copyright 2018. All Rights Reserved.</CopyrightText>
        <SocialIcons>
          <StyledATag href="https://github.com/pxr13" target="_blank">
            <Github size={SOCIAL_ICON_SIZE} />
          </StyledATag>
          <StyledATag href="https://linkedin.com/in/patrickxrivera" target="_blank">
            <Linkedin size={SOCIAL_ICON_SIZE} />
          </StyledATag>
          <StyledATag href="https://twitter.com/pxr13" target="_blank">
            <Twitter size={SOCIAL_ICON_SIZE} />
          </StyledATag>
        </SocialIcons>
      </Footer>
    </div>
  </Wrapper>
);

export default LandingPage;
