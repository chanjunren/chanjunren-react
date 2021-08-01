import React from 'react';
import SnackBar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const CustomisedSnackBar = (props) => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    props.clearError();
  };
  
  const alert = props.success ? (
    <Alert onClose={handleClose} severity="success">
      Logged In Successfully!
    </Alert>
  ) : (
    <Alert onClose={handleClose} severity="error">
      {props.message}
    </Alert>
  );
  return <SnackBar open={props.open} autoHideDuration={6000} onClose={handleClose}>
    {alert}
  </SnackBar>;
};

export default CustomisedSnackBar;
