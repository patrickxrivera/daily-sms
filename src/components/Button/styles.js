import styled from 'styled-components';

import colors from 'utils/colors';

export const ButtonStyles = styled.button`
  color: ${({ color }) => color};
  padding: 0.2em 0.4em;
  outline: 0;
  margin-right: ${({ marginRight }) => marginRight};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  line-height: 1.2222222;
  text-align: center;
  border: ${({ border }) => border};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  cursor: pointer;
  background: ${({ bgColor, isDisabled }) => (isDisabled ? colors.disabled : bgColor)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop}
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')}

  &:hover {
    background: ${({ hoverBgColor, isDisabled }) => (isDisabled ? colors.disabled : hoverBgColor)};
  }
`;
