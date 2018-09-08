import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { InputStyled } from 'components/Modal/styles';

const TimePicker = ({ classes, input, meta: { touched, error } }) => (
  <InputStyled renderErrorText={touched && error}>
    <TextField
      {...input}
      InputProps={{
        disableUnderline: true,
        step: 300, // 5 min
        classes: {
          input: classes.resize
        }
      }}
      type="time"
      InputLabelProps={{
        shrink: true
      }}
      resize={{
        fontSize: '14px'
      }}
    />
    <span style={{ fontSize: '12px', color: '#cc0000' }}>{touched && error}</span>
  </InputStyled>
);

const styles = (theme) => ({
  resize: {
    fontSize: 14
  }
});

export default withStyles(styles)(TimePicker);
