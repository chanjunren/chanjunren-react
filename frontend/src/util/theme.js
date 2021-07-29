import React from 'react';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

let theme = createTheme({
  palette: {
    type: 'dark',
    // primary: {
    //   main: teal[400],
    // },
    // secondary: {
    //   main: grey[600],
    // },
    // primary: {
    //   light: '#757ce8',
    //   main: '#161b22',
    //   dark: '#090c10',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
    // background: '#090c10'
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
