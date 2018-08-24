import React from 'react';

import { Wrapper, TableWrapper, TableRow, TableCell, More } from './styles';

const messages = [
  {
    id: 1,
    status: 'On',
    text: '1) 3 LeetCode medium problems, 2) System Design problem...',
    frequency: 'Daily',
    send_at: '8:00am',
    created_at: '8/21'
  },
  {
    id: 2,
    status: 'On',
    text: 'You are beautiful, in every single way.',
    frequency: 'Weekdays',
    send_at: '8:00am',
    created_at: '8/21'
  }
];

const renderMessage = ({ id, status, text, frequency, send_at, created_at }) => (
  <TableRow id={id}>
    <TableCell>{status}</TableCell>
    <TableCell>{text}</TableCell>
    <TableCell>{frequency}</TableCell>
    <TableCell>{send_at}</TableCell>
    <TableCell>{created_at}</TableCell>
    <TableCell>
      <More />
    </TableCell>
  </TableRow>
);

const Table = () => (
  <Wrapper>
    <TableWrapper>
      <TableRow noBorder>
        <TableCell heading>Status</TableCell>
        <TableCell heading align="left">
          Text
        </TableCell>
        <TableCell heading>Frequency</TableCell>
        <TableCell heading align="left">
          Send At
        </TableCell>
        <TableCell heading>Created</TableCell>
        <TableCell />
      </TableRow>
      {messages.map(renderMessage)}
    </TableWrapper>
  </Wrapper>
);

export default Table;
