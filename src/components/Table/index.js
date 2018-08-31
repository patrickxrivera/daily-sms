import React from 'react';
import Switch from 'react-toggle-switch';

import { Edit, Trash } from 'components/Icon';
import { Wrapper, TableWrapper, TableRow, TableCell, CallToActionWrapper } from './styles';
import Button from 'components/Button';
import { shorten, formatTime } from './helpers';

import 'react-toggle-switch/dist/css/switch.min.css';
import './stylesheet.css';

const ICON_SIZE = 18;

const isEmpty = (messages) => !messages.length;

const renderMessage = ({ toggleSwitch, handleDeleteClick }) => ({
  id,
  active,
  text,
  frequency,
  send_time,
  created_at
}) => (
  <TableRow key={id}>
    <TableCell>
      <Switch on={active} onClick={toggleSwitch(id, active)} />
    </TableCell>
    <TableCell align="left" style={{ width: '300px' }}>
      {shorten(text)}
    </TableCell>
    <TableCell>{frequency}</TableCell>
    <TableCell>{send_time}</TableCell>
    <TableCell>
      <div style={{ display: 'flex' }}>
        <Trash size={ICON_SIZE} style={{ marginLeft: '10px' }} onClick={handleDeleteClick(id)} />
      </div>
    </TableCell>
  </TableRow>
);

const renderTableData = (messages, rest) => (
  <TableWrapper>
    <tbody>
      <TableRow noBorder>
        <TableCell heading>Status</TableCell>
        <TableCell heading align="left" style={{ maxWidth: '150px' }}>
          Text
        </TableCell>
        <TableCell heading>Frequency</TableCell>
        <TableCell heading>Send At</TableCell>
        <TableCell style={{ width: '80px' }} />
      </TableRow>
      {messages.map(renderMessage(rest))}
    </tbody>
  </TableWrapper>
);

const renderCallToAction = (handleOpenModal) => (
  <CallToActionWrapper>
    <div>You haven't created any messages yet!</div>
    <div>Get started by clicking below.</div>
    <Button width="200px" fontSize="18px" marginTop="2rem" onClick={handleOpenModal}>
      Create Message
    </Button>
  </CallToActionWrapper>
);

const Table = ({ handleOpenModal, messages, ...rest }) => (
  <Wrapper>
    {isEmpty(messages) ? renderCallToAction(handleOpenModal) : renderTableData(messages, rest)}
  </Wrapper>
);

export default Table;
