import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
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
  expanded: {
    "&$expanded": {
      margin: '4px'
    }
  },
}));

const TemiAccordion = (props) => {
  const classes = useStyles();

  const { serialNumber, owner, applications, index } = props;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls={`panel${index}c-content`}
        id={`panel${index}c-header`}
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
  );
};

export default TemiAccordion;
