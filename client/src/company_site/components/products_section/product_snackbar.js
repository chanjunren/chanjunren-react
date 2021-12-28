import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';

const ProductSnackbar = (props) => {
	function GrowTransition(props) {
		return <Grow {...props} />;
	}
	
	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});
	
	const {open, handleClose} = props;
	return (
		<Snackbar 
			open={open}
			autoHideDuration={6000}
			// onClose={handleClose}
			anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
			TransitionComponent={GrowTransition}
			>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Please contact us to place an order! Refer to the 'Contact Us' section
        </Alert>
      </Snackbar>
	)
}

export default ProductSnackbar;
