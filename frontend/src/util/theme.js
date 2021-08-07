import React from 'react';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    type: 'dark',
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
