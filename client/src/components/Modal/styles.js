import styled from 'styled-components';
import { Field } from 'redux-form';

import colors from 'utils/colors';
import font from 'utils/font';

export const style = {
  content: {
    width: '450px',
    height: '424px',
    margin: '20% auto 0',
    fontFamily: `${font.default}`,
    boxShadow: '0 0 0 1px rgba(0,0,0,.07), 0 2px 15px rgba(84,96,103,.25)',
    background: '#f7fafc',
    borderRadius: '4px',
    padding: 'none',
    position: 'none'
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

export const InputStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center
  height: 30px;
  padding: 6px 14px;
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  background: 0 0;
  width: 157.5px;

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

export const DayPickerWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  position: absolute;
  padding: 0.5rem;
  right: 365px;
  top: 430px;
  z-index: 9999;
  box-shadow: 0 7px 14px 0 rgba(59, 65, 94, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  width: 140px;
`;
