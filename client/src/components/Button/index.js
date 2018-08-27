import { ButtonStyles } from './styles';
import colors from 'utils/colors';

import React from 'react';

const defaultProps = {
  color: '#fff',
  width: '100%',
  bgColor: colors.primary,
  height: '50px',
  fontSize: '14px',
  marginRight: '0px',
  hoverBgColor: 'rgba(9, 132, 280, 1)',
  border: 'none',
  marginTop: '0px'
};

const Button = ({ children, handleClick, ...props }) => (
  <ButtonStyles onClick={handleClick} {...props}>
    {children}
  </ButtonStyles>
);

Button.defaultProps = defaultProps;

export default Button;
