import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { InputStyled } from 'components/Modal/styles';

const TimePicker = ({ classes }) => {
  return (
    <InputStyled>
      <TextField
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.resize
          }
        }}
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300, // 5 min
          fontSize: '14px'
        }}
        resize={{
          fontSize: '14px'
        }}
      />
    </InputStyled>
  );
};
const styles = (theme) => ({
  resize: {
    fontSize: 14
  }
});

export default withStyles(styles)(TimePicker);
