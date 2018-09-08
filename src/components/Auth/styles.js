import styled from 'styled-components';
import colors from 'utils/colors';
import { fadeInUp } from 'utils/animations';

export const FilledBackground = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 100vh;
  position: absolute;
  background-attachment: fixed;
`;

export const InputWrapper = styled.div`
  opacity: 0;
  animation: 800ms ${fadeInUp} 200ms forwards;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;
  width: 400px;
  height: 400px;
  margin: 5rem auto;
  padding: 1.75rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Line = styled.hr`
  width: 100%;
  opacity: 0.2;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;
export const CountryCodeText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  border: none;
  font-size: 1.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    opacity: 0.3;
  }
`;

export const Subtext = styled.div`
  opacity: 0.4;
  font-size: 1rem;
  margin-bottom: 8px;
`;

export const ErrorText = styled.div`
  color: #dc3545;
  margin: -0.8rem 0 0.8rem;
  height: 18px;
`;
