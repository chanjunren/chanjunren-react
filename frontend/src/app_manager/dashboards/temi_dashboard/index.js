import React, { useEffect, useState } from 'react';
import useHttpClient from '../../../company_site/hooks/http_hook';
import { BASE_ADDRESS } from '../../../util/values';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import TemiAccordion from './temi_accordion';
import { withTheme } from '../../../util/theme';
// import SimpleAccordion from './temi_accordion';

const TemiDashboard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 20,
    },
    accordionRoot: {
      width: '100%',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
  const classes = useStyles();

  const { isLoading, errorEncountered, sendRequest, clearError } =
    useHttpClient();
  const [loadedTemis, setLoadedTemis] = useState([]);

  const getTemis = async () => {
    try {
      const responseData = await sendRequest(`${BASE_ADDRESS}/api/temis`);
      setLoadedTemis(responseData.Units);
    } catch (err) {
      console.error(err);
      clearError();
    }
  };

  useEffect(() => {
    getTemis();
  }, [sendRequest]);

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.accordionRoot}>
        {loadedTemis.map((temi, index) => {
          console.log(index);
          return (
            <TemiAccordion
              key={temi.serialNumber}
              index={index + 1}
              {...temi}
            />
          );
        })}
        {/* <SimpleAccordion/> */}
      </div>
    </div>
  );
};

export default withTheme(TemiDashboard);
