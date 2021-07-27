import React from 'react';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: teal[400],
    },
    secondary: {
      main: grey[600],
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    }
  }
});

theme = responsiveFontSizes(theme);

const Theme = (props) => {
  const {children} = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export const withTheme = (Component) => {
  return (props) => {
    return <Theme>
      <Component {...props}/>
    </Theme>;
  };
}
