import React from 'react';
import Switch from 'react-toggle-switch';

import { Wrapper, TableWrapper, TableRow, TableCell, More } from './styles';

import { shorten } from './helpers';

import 'react-toggle-switch/dist/css/switch.min.css';
import './stylesheet.css';

const renderMessage = (on, toggleSwitch) => ({
  id,
  active,
  text,
  frequency,
  send_time,
  created_at
}) => (
  <TableRow key={`${id}-${text}`}>
    <TableCell>
      <Switch on={on} onClick={toggleSwitch} />
    </TableCell>
    <TableCell align="left" style={{ width: '300px' }}>
      {shorten(text)}
    </TableCell>
    <TableCell>{frequency}</TableCell>
    <TableCell>{send_time}</TableCell>
    <TableCell>
      <More />
    </TableCell>
  </TableRow>
);

const Table = ({ messages, on, toggleSwitch }) => (
  <Wrapper>
    <TableWrapper>
      <tbody>
        <TableRow noBorder>
          <TableCell heading>Status</TableCell>
          <TableCell heading align="left" style={{ maxWidth: '150px' }}>
            Text
          </TableCell>
          <TableCell heading>Frequency</TableCell>
          <TableCell heading>Send At</TableCell>
          <TableCell />
        </TableRow>
        {messages.map(renderMessage(on, toggleSwitch))}
      </tbody>
    </TableWrapper>
  </Wrapper>
);

export default Table;
