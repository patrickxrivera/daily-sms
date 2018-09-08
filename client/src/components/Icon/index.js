import React from 'react';
import { Edit2, Trash2 } from 'react-feather';

import { IconWrapper } from './styles';

// TODO: dry this up

export const Edit = (props) => (
  <IconWrapper>
    <Edit2 {...props} />
  </IconWrapper>
);

export const Trash = (props) => (
  <IconWrapper>
    <Trash2 {...props} />
  </IconWrapper>
);
