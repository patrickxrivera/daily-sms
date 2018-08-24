import styled from 'styled-components';

export const ButtonStyles = styled.button`
  color: #fff;
  padding: 0.6em 0.8em;
  outline: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2222222;
  text-align: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  cursor: pointer;
  background: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(9, 132, 280, 1);
  }
`;
