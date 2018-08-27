import React from 'react';
import { MessageCircle } from 'react-feather';
import { SidePanelWrapper, Heading, MenuItem, MenuItemText } from './styles';
import colors from 'utils/colors';

const ICON_SIZE = 18;

const SidePanel = () => (
  <SidePanelWrapper>
    <Heading>Menu</Heading>
    <div>
      <MenuItem isSelected>
        <MessageCircle size={ICON_SIZE} color={colors.primary} />
        <MenuItemText isSelected>Messages</MenuItemText>
      </MenuItem>
    </div>
  </SidePanelWrapper>
);

export default SidePanel;
