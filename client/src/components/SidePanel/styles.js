import styled from 'styled-components';
import colors from 'utils/colors';

export const SidePanelWrapper = styled.div`
  background-color: #fff;
  width: 260px;
  padding-left: 3rem;
  padding-top: 7rem;
`;

export const Heading = styled.div`
  color: #bdc3c7;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  letter-spacing: 0.5px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.3rem;
  color: #3b364e;
  opacity: ${({ isSelected }) => (isSelected ? '1' : '.5')};

  &:hover {
    opacity: 1;
    transition: background 120ms ease-in;
    cursor: pointer;
  }
`;

export const MenuItemText = styled.div`
  margin-left: 10px;
  font-weight: 500;
  color: ${({ isSelected }) => (isSelected ? colors.primary : 'default')};
`;
