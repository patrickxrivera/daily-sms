import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { DayPickerWrapper } from '../Modal/styles';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const renderFormControlLabel = (day) => (
  <FormControlLabel
    key={day}
    control={<Checkbox color="primary" checked={day} value={day} />}
    label={day}
    style={{ height: '35px' }}
  />
);

class DayPicker extends Component {
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  setRef = (node) => {
    this.node = node;
  };

  handleClick = (e) => {
    !this.node.contains(e.target) && this.props.handleCloseCheckbox();
  };

  render() {
    return (
      <div ref={this.setRef}>
        <DayPickerWrapper>
          <FormControl component="fieldset">
            <FormGroup>{DAYS.map(renderFormControlLabel)}</FormGroup>
          </FormControl>
        </DayPickerWrapper>
      </div>
    );
  }
}

export default DayPicker;
