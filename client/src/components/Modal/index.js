import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';

import ReactModal from 'react-modal';
import Button from 'components/Button';
import colors from 'utils/colors';
import font from 'utils/font';

const style = {
  content: {
    width: '450px',
    height: '424px',
    margin: 'auto',
    fontFamily: `${font.default}`,
    boxShadow: '0 0 0 1px rgba(0,0,0,.07), 0 2px 15px rgba(84,96,103,.25)',
    background: '#f7fafc',
    borderRadius: '4px',
    padding: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(82,95,127,.25)'
  }
};

export const Heading = styled.div`
  font-size: 16px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 10px rgba(135, 146, 162, 0.15);
`;

export const FieldRow = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FieldStyled = styled(Field)`
  box-sizing: border-box;
  display: block;
  height: 30px;
  padding: 6px 14px;
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  background: 0 0;

  &:focus {
    outline: 0;
    border-color: ${colors.primary};
    box-shadow: 0 0 1px 0 ${colors.primary};
  }
`;

export const Label = styled.label`
  width: 100px;
  text-align: right;
  margin-right: 18px;
  font-size: 14px;
`;

export const FieldsWrapper = styled.div`
  margin: 20px 0;
`;

export const Footer = styled.div`
  border-top: 2px solid #fff;
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 10px;
  align-items: center;
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Modal = ({ showModal, handleCloseModal, handleSubmit }) => (
  <ReactModal isOpen={showModal} onRequestClose={handleCloseModal} style={{ ...style }}>
    <Form onSubmit={handleSubmit} autocomplete="off">
      <Heading>Create a new message</Heading>
      <FieldsWrapper>
        <FieldRow>
          <Label htmlFor="firstName">Text</Label>
          <FieldStyled name="firstName" component="input" type="text" autocomplete="off" />
        </FieldRow>
        <FieldRow>
          <Label htmlFor="firstName">Frequency</Label>
          <FieldStyled name="firstName" component="input" type="text" />
        </FieldRow>
        <FieldRow>
          <Label htmlFor="firstName">Send At</Label>
          <FieldStyled name="firstName" component="input" type="text" />
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
