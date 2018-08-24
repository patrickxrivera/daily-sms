import styled, { injectGlobal } from 'styled-components';

import font from 'utils/font';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  color: rgb(66, 66, 65);
  font-size: 14px;
  font-family: ${font.default};
  line-height: 1.35;
`;
