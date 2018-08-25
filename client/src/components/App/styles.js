import styled, { injectGlobal } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

import font from 'utils/font';
import colors from 'utils/colors';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

export const Wrapper = styled.div`
  color: rgb(66, 66, 65);
  font-size: 14px;
  font-family: ${font.default};
  line-height: 1.35;
`;
