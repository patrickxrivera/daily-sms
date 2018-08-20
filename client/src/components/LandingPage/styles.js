import styled from 'styled-components';
import media from 'utils/mediaTemplate';

import colors from 'utils/colors';

export const Wrapper = styled.div`
  width: 1200px;
  ${media.tablet`width: 90%;`};
  margin: 2.5rem auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1.75rem;
  color: ${colors.primary};
  font-weight: bold;
`;

export const Text = styled.span`
  color: ${colors.primary};
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
  opacity: 0.8;
  text-align: center;
`;

export const Button = styled.button`
  color: #fff;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  display: inline-block;
  vertical-align: middle;
  padding: 0.6em 2em;
  outline: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2222222;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  cursor: pointer;
  background: ${colors.primary};

  &:hover {
    background: rgba(9, 132, 280, 1);
  }
`;
