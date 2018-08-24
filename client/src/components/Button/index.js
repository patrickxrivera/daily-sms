import { ButtonStyles } from './styles';
import colors from 'utils/colors';

import React from 'react';

const defaultProps = {
  width: '100%',
  bgColor: colors.primary,
  height: '50px'
};

const Button = ({ width, bgColor, height, children }) => (
  <ButtonStyles bgColor={bgColor} width={width} height={height}>
    {children}
  </ButtonStyles>
);

Button.defaultProps = defaultProps;

export default Button;
