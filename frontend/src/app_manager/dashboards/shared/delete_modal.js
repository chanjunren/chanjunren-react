import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DataContext from '../../shared/data_context';
import { AuthContext } from '../../../company_site/components/shared/auth_context';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const DeleteModal = (props) => {
  const classes = useStyles();
  const { openModal, deleteEndpoint, hideDeleteModal, deleteMessage } = props;
  const dataContext = useContext(DataContext);
  const { sendRequest } = dataContext;

  const authContext = useContext(AuthContext);

  const onConfirmDelete = async (event) => {
    try {
      console.log(deleteEndpoint);
      const responseData = await sendRequest(deleteEndpoint, 'DELETE', null, {
        Authorization: `Bearer ${authContext.token}`,
      });
      console.log(responseData);
      dataContext.fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      hideDeleteModal();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={hideDeleteModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <Grid>
              <Grid item>
                <Typography>{deleteMessage}</Typography>
              </Grid>
              <Grid item>
                <div>
                  <Button color="secondary" onClick={hideDeleteModal}>
                    No
                  </Button>
                  <Button color="primary" onClick={onConfirmDelete}>
                    Yes
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteModal;
