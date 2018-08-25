import React from 'react';
import { Field, reduxForm } from 'redux-form';

import ReactModal from 'react-modal';
import TimePicker from 'components/TimePicker';
import DayPicker from 'components/DayPicker';
import Button from 'components/Button';
import {
  Form,
  Heading,
  FieldsWrapper,
  FieldRow,
  Label,
  FieldStyled,
  Footer,
  style
} from './styles';

const Modal = ({
  showModal,
  showCheckbox,
  handleCloseModal,
  handleSubmit,
  handleOpenCheckbox,
  ...props
}) => (
  <ReactModal isOpen={showModal} onRequestClose={handleCloseModal} style={{ ...style }}>
    {showCheckbox && <DayPicker {...props} />}
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
            focusColorOff
            onClick={handleOpenCheckbox}
            name="firstName"
            component="input"
            type="text"
          />
        </FieldRow>
        <FieldRow>
          <Label htmlFor="firstName">Send At</Label>
          <Field name="firstName" component={TimePicker} type="text" />
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
