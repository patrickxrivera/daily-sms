import React from 'react';
import styled from 'styled-components';

import SidePanel from 'components/SidePanel';

const NUM_COLUMNS = 5;
const COLUMN_PERCENTAGE = 100 / NUM_COLUMNS;

export const Wrapper = styled.div`
  background-color: #e9ebee;
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const TableHeading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 6rem;
  color: #3b364e;
`;

export const ContentWrapper = styled.div`
  margin: 0 2rem;
  width: 100%;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 75%;
  box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;
  border-radius: 4px;
  margin: 1.5rem 0;
  background-color: #fff;
`;

export const Table = styled.div`
  display: flex;
  padding: 1rem;
`;

// TODO: better width
export const TableCell = styled.div`
  width: ${({ main }) => (main ? '40%' : '20%')};
  opacity: ${({ heading }) => (heading ? '.5' : '1')};
`;

const Dashboard = ({}) => (
  <Wrapper>
    <SidePanel />
    <ContentWrapper>
      <TableHeading>My Messages</TableHeading>
      <TableWrapper>
        <Table>
          <TableCell heading>Status</TableCell>
          <TableCell heading main>
            Text
          </TableCell>
          <TableCell heading>Frequency</TableCell>
          <TableCell heading>Send At</TableCell>
          <TableCell heading>Created</TableCell>
        </Table>
      </TableWrapper>
    </ContentWrapper>
  </Wrapper>
);

export default Dashboard;
