import React from 'react';

import SidePanel from 'components/SidePanel';
import TableContainer from 'components/Table/container';
import ModalContainer from 'components/Modal/container';
import Button from 'components/Button';
import { Wrapper, ContentWrapper, HeadingWrapper, TableName } from './styles';

const Dashboard = ({ handleOpenModal, ...rest }) => (
  <Wrapper>
    <SidePanel />
    <ContentWrapper>
      <HeadingWrapper>
        <TableName>My Messages</TableName>
        <Button width="100px" height="40px" handleClick={handleOpenModal}>
          Create
        </Button>
        <ModalContainer {...rest} />
      </HeadingWrapper>
      <TableContainer />
    </ContentWrapper>
  </Wrapper>
);

export default Dashboard;
