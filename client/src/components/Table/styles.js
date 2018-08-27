import styled from 'styled-components';

const BORDER_WIDTH = '1.95px';

export const Wrapper = styled.div`
  width: 100%;
  height: 75%;
  box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;
  border-radius: 4px;
  margin: 1.5rem 0;
  background-color: #fff;
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableCell = styled.td`
  padding: 1rem;
  text-align: ${({ align }) => (align ? align : 'center')};
  opacity: ${({ heading }) => (heading ? '.6' : '1')};
`;

export const TableRow = styled.tr`
  align-items: center;
  border-top: ${BORDER_WIDTH} solid #dcdde1;
  border-bottom: ${BORDER_WIDTH} solid #dcdde1;
  margin-bottom: 1rem;
  align-items: center;

  &:hover {
    background-color: #ecf0f1;
    transition: background 120ms ease-in;
    cursor: pointer;
  }
`;

export const CallToActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15rem;
  font-size: 2rem;
`;
