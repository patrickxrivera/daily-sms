import styled from 'styled-components';
import media from 'utils/mediaTemplate';
import { Link } from 'react-router-dom';

import colors from 'utils/colors';

export const Wrapper = styled.div`
  width: 1200px;
  ${media.tablet`width: 90%;`};
  margin: 2.5rem auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
`;

export const Title = styled.span`
  font-size: 1.75rem;
  color: ${colors.primary};
  font-weight: bold;
`;

export const Text = styled.span`
  color: ${colors.primary};
`;

export const DemoText = styled.span`
  color: ${colors.primary};
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  border-left: 2px solid #e1e3e3;

  &:hover {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainText = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 0.83;
  letter-spacing: -1.7px;
  text-align: center;
`;

export const Description = styled.span`
  color: #424770;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.24;
  margin: 24px auto 32px;
  max-width: 820px;
  padding-left: 8px;
  padding-right: 8px;
  opacity: 0.6;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 16px;
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  min-width: 168px;
  width: auto;
  padding: 10px 15px;
  font-family: inherit;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  align-self: center;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  background-color: ${colors.primary};
  color: #fff;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  transition: all 0.2s ease;
  outline: 0;

  &:hover {
    background: rgba(9, 132, 280, 1);
    cursor: pointer;
  }
`;

export const SignUpText = styled.div`
  margin-top: 2rem;
  opacity: 0.4;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transition: background 120ms ease-in;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

export const SecondaryButton = styled.div`
  margin-top: 1rem;
  font-size: 16px;
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  min-width: 168px;
  width: auto;
  padding: 10px 15px;
  font-family: inherit;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  align-self: center;
  border: 1px solid #e9ebeb;
  border-bottom: 1px solid #e1e3e3;
  border-radius: 4px;
  background-color: #fff;
  color: rgba(14, 30, 37, 0.87);
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  transition: all 0.2s ease;
  outline: 0;

  &:hover {
    background-color: #f5f5f5;
    color: rgba(14, 30, 37, 0.87);
    box-shadow: 0 8px 12px 0 rgba(233, 235, 235, 0.16), 0 2px 8px 0 rgba(0, 0, 0, 0.08);
    text-decoration: none;
    cursor: pointer;
  }
`;
