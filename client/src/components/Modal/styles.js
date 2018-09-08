import styled from 'styled-components';
import Textarea from 'react-autosize-textarea';
import { Field } from 'redux-form';

import colors from 'utils/colors';
import font from 'utils/font';

export const style = {
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
  font-size: 14px;
  height: 30px;
  padding: 6px 14px;
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  background: 0 0;
  color: inherit;

  &:focus {
    outline: 0;
    border-color: ${({ focusColorOff }) => (focusColorOff ? 'none' : colors.primary)};
    box-shadow: ${({ focusColorOff }) => (focusColorOff ? 'none' : `0 0 1px 0 ${colors.primary}`)};
  }

  &::-webkit-input-placeholder {
    opacity: 0.7;
  }
`;

export const InputStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  align-items: center
  height: ${({ resize }) => (resize ? 'none' : '30px')};
  min-height: ${({ resize }) => (resize ? '29px' : 'none')}
  padding: 2px 10px;
  border: ${({ renderErrorText }) => (renderErrorText ? '2px solid #dc3545' : `2px solid #e9ebeb`)};
  border-radius: 4px;
  background: 0 0;
  width: 179px;

  &:focus {
    outline: 0;
    box-shadow: ${({ renderErrorText }) =>
      renderErrorText ? '0 0 0 0.2rem rgba(220,53,69,.25)' : `0 0 1px 0 ${colors.primary}`};
    border-color: ${({ renderErrorText }) => (renderErrorText ? '#dc3545' : `${colors.primary}`)};
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
  border: 2px solid #e9ebeb;
  background-color: rgb(255, 255, 255);
  position: absolute;
  z-index: 9999;
  box-shadow: 0 7px 14px 0 rgba(59, 65, 94, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  width: 164px;
  padding: 6px;
  top: 226px;
  right: 76px;
`;

export const TextareaStyled = styled(Textarea)`
  border: none;
  background: inherit;
  margin-left: 0px;
  margin-right: 0px;
  resize: none;
  font-size: 14px;
  height: 17px;

  &:focus {
    outline: none;
  }
`;

export const FrequencyInputStyled = styled.input`
  font-size: 14px;
  border: none;
  background: inherit;
  width: 102px;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    opacity: 0.7;
  }
`;
