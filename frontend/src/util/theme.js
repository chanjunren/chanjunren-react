import React from 'react';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[300],
    },
    secondary: {
      main: teal[400],
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    }
  }
});

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
