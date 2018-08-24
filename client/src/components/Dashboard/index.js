import React from 'react';

import SidePanel from 'components/SidePanel';
import TableContainer from 'components/Table/container';
import Button from 'components/Button';
import { Wrapper, ContentWrapper, HeadingWrapper, TableName } from './styles';

const Dashboard = ({}) => (
  <Wrapper>
    <SidePanel />
    <ContentWrapper>
      <HeadingWrapper>
        <TableName>My Messages</TableName>
        <Button width="100px" height="40px">
          Create
        </Button>
      </HeadingWrapper>
      <TableContainer />
    </ContentWrapper>
  </Wrapper>
);

export default Dashboard;
