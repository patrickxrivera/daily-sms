import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import ReactModal from 'react-modal';
import Button from 'components/Button';
import {
  Form,
  Heading,
  DayPickerWrapper,
  FieldsWrapper,
  FieldRow,
  Label,
  FieldStyled,
  Footer,
  InputStyled,
  style
} from './styles';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const renderFormControlLabel = (day) => (
  <FormControlLabel
    key={day}
    control={<Checkbox checked={day} value={day} />}
    label={day}
    style={{ height: '35px' }}
  />
);

const renderDayPicker = () => (
  <DayPickerWrapper>
    <FormControl component="fieldset">
      <FormGroup>{DAYS.map(renderFormControlLabel)}</FormGroup>
    </FormControl>
  </DayPickerWrapper>
);

const renderTimePicker = () => (
  <InputStyled>
    <TextField
      InputProps={{
        disableUnderline: true
      }}
      type="time"
      defaultValue="07:30"
      InputLabelProps={{
        shrink: true
      }}
      inputProps={{
        step: 300 // 5 min
      }}
    />
  </InputStyled>
);

const Modal = ({ showModal, showCheckbox, handleCloseModal, handleSubmit, handleOpenCheckbox }) => (
  <ReactModal isOpen={showModal} onRequestClose={handleCloseModal} style={{ ...style }}>
    {showCheckbox && renderDayPicker()}
    <Form onSubmit={handleSubmit} autocomplete="off">
      <Heading>Create a new message</Heading>
      <FieldsWrapper>
        <FieldRow>
          <Label htmlFor="firstName">Text</Label>
          <FieldStyled name="firstName" component="input" type="text" autocomplete="off" />
        </FieldRow>
        <FieldRow>
          <Label htmlFor="firstName">Frequency</Label>
          <FieldStyled
            onClick={handleOpenCheckbox}
            name="firstName"
            component="input"
            type="text"
          />
        </FieldRow>
        <FieldRow>
          <Label htmlFor="firstName">Send At</Label>
          <Field name="firstName" component={renderTimePicker} type="text" />
        </FieldRow>
      </FieldsWrapper>
      <Footer>
        <Button
          width="70px"
          fontSize="13px"
          height="32px"
          style={{ marginRight: '8px' }}
          bgColor="#fff"
          color="rgb(4, 4, 2)"
          hoverBgColor="rgba(235, 87, 87, 0.03)"
          border="1px solid #e9ebeb"
          onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button width="125px" fontSize="13px" height="30px">
          Create Message
        </Button>
      </Footer>
    </Form>
  </ReactModal>
);

export default reduxForm({ form: 'create_message' })(Modal);
