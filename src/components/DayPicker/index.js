import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { DayPickerWrapper } from '../Modal/styles';

const renderDayDropdown = (handleChange, change) => ([day, checked]) => (
  <FormControlLabel
    key={day}
    control={
      <Checkbox
        onChange={handleChange(change)}
        color="primary"
        checked={checked}
        value={day}
        name={day}
      />
    }
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
    const { days, handleChange, change } = this.props;

    return (
      <div ref={this.setRef}>
        <DayPickerWrapper>
          <FormControl component="fieldset">
            <FormGroup>
              {Object.entries(days).map(renderDayDropdown(handleChange, change))}
            </FormGroup>
          </FormControl>
        </DayPickerWrapper>
      </div>
    );
  }
}

export default DayPicker;
