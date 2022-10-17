import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@mui/material/Link';
import { useContactCardStyles } from './contact_us_style';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import PlaceIcon from '@material-ui/icons/Place';
import MailIcon from '@material-ui/icons/Mail';

export default function ContactCard(props) {
	const classes = useContactCardStyles();
	return <Grid item xs={12} sm={6} lg={3} className={classes.infoContainer}>
		<div className={classes.headerBlock}>
			<Typography className={classes.countryHeader} variant="h5" color="secondary">
				{props.country}
			</Typography>
		</div>
		<Typography className={classes.infoBody} variant='body2'>
			{props.company}
		</Typography>
		<div className={classes.headerBlock}>
			<PlaceIcon />
			<Typography className={classes.infoHeader} variant="h6">
				Address
			</Typography>
		</div>
		<Typography className={classes.infoBody} variant="body1">
			{props.address}
		</Typography>

		<div className={classes.headerBlock}>
			<MailIcon />
			<Typography className={classes.infoHeader} variant="h6">
				Email
			</Typography>
		</div>
		<Link
			className={classes.infoBody}
			variant="body1"
			href={`mailto:${props.email}`}
		// href="mailto:enquiries@robosolutions.sg" 
		>
			{`${props.email}`}
		</Link>
		<div className={classes.headerBlock}>
			<LocalPhoneIcon />
			<Typography className={classes.infoHeader} variant="h6">
				Contact Number
			</Typography>
		</div>
		<Typography className={classes.infoBody} variant="body1">
			{`${props.contactNumber}`}
		</Typography>
	</Grid>
}