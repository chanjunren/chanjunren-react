import React from 'react';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  makeStyles,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15), //TEST
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
}));

const TemiAccordion = (props) => {
  const classes = useStyles();

  const { serialNumber, owner, applications } = props;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{owner}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {serialNumber}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {applications.map((app) => {
            return <Chip label={app} />;
          })}
        </AccordionDetails>
        <AccordionActions>
          <Button size="small">Delete</Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
};

export default TemiAccordion;
