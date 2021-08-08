import React from 'react';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#CCD3D9',
      main: '#1B2026',
      dark: '#070A0D',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#01bf71',
      contrastText: '#fff',
    }
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
