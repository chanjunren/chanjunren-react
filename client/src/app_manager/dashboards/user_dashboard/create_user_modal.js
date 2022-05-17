import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@material-ui/core/Grid';
import DataContext from '../../shared/data_context';
import useForm from '../../../shared/hooks/form_hook';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from '../../../util/form_validators';
import { AuthContext } from '../../../company_site/components/shared/auth_context';
import CustomisedSnackBar from '../../../shared/components/snackbar';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: '#000',
		borderRadius: '5px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300,
	},
	label: {
		color: '#fff'
	}
}));

export default function CreateUserModal(props) {
	const classes = useStyles();
	const { openModal, modalHandler } = props;
	const [formState, formInputHandler] = useForm({
		usernameTextField: {
			value: '',
			isValid: false,
		},
		passwordTextField: {
			value: [],
			isValid: false,
		},
		roleField: {
			value: 'USER',
			isValid: true
		}
	});

	const onUsernameInput = (event) => {
		const nameValidators = [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)];
		formInputHandler(event.target.id, event.target.value, nameValidators);
	};

	const onPasswordInput = (event) => {
		const nameValidators = [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)];
		formInputHandler(event.target.id, event.target.value, nameValidators);
	};

	const onRoleChange = (event) => {
		if (formState.inputs.roleField.value === 'ADMIN') {
			formInputHandler(event.target.id, 'USER', []);
		} else {
			formInputHandler(event.target.id, 'ADMIN', [])
		}
	}

	const authContext = useContext(AuthContext);
	const dataContext = useContext(DataContext);
	const { sendRequest, errorEncountered, clearError } = dataContext;

	const addNewUnit = async () => {
		if (formState.isFormValid) {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/api/users/signup/`,
					'POST',
					JSON.stringify({
						username: formState.inputs.usernameTextField.value,
						password: formState.inputs.passwordTextField.value,
						role: formState.inputs.roleField.value
					}),
					{
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + authContext.token,
					},
				);
				modalHandler();
			} catch (err) {
				console.error(err);
			}
		}
	};

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={openModal}
			onClose={modalHandler}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<React.Fragment>
				<CustomisedSnackBar
					message={errorEncountered}
					success={!!!errorEncountered}
					open={!!errorEncountered}
					clearError={clearError}
				/>
				<Fade in={openModal}>
					<form>
						<Grid className={classes.paper} container direction='column' spacing={1}>
							<Grid item>
								<TextField
									error={!formState.inputs.usernameTextField.isValid}
									id="usernameTextField"
									label="Username"
									variant="outlined"
									color="secondary"
									onInput={onUsernameInput}
								/>
							</Grid>
							<Grid item>
								<TextField
									error={!formState.inputs.passwordTextField.isValid}
									id="passwordTextField"
									label="Password"
									variant="outlined"
									color="secondary"
									onInput={onPasswordInput}
								/>
							</Grid>
							<Grid item>
								<FormGroup>
									<FormControlLabel control={
										<Checkbox
											id="roleField"
											// className={classes.label}
											checked={formState.inputs.roleField.value === 'ADMIN'}
											onChange={onRoleChange}
											style={{color: 'white'}}
										/>} label="Admin" />
								</FormGroup>

							</Grid>
							<Grid item>
								<div>
									<Button onClick={modalHandler}>
										Cancel
									</Button>
									<Button
										color="secondary"
										onClick={addNewUnit}
										disabled={!formState.isFormValid}
									>
										Add
									</Button>
								</div>
							</Grid>
						</Grid>
					</form>
				</Fade>
			</React.Fragment>
		</Modal>
	);
}
