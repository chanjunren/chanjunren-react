import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

function getStyles(unit, temiUnits, theme) {
  return {
    fontWeight:
      temiUnits.indexOf(unit) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const SelectUnits = (props) => {
  const { availableUnits, selectedUnits, setSelectedUnits } = props;
  const classes = useStyles();
  const theme = useTheme();
  const onSelect = (event) => {
    setSelectedUnits(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="chip-label">Temi Units</InputLabel>
      <Select
        labelId="multiple-chip-label"
        id="multiple-chip"
        multiple
        value={selectedUnits}
        onChange={onSelect}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div className="chips">
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {availableUnits.map((unit) => {
          console.log(unit);
          return <MenuItem
            key={unit}
            value={unit}
            style={getStyles(unit, selectedUnits, theme)}
          >
            <Checkbox checked={selectedUnits.indexOf(unit) > -1} />
            <ListItemText primary={unit} />
          </MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectUnits;
