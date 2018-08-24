import React from 'react';
import { Edit2, Settings } from 'react-feather';
import { SidePanelWrapper, Heading, MenuItem, MenuItemText } from './styles';
import colors from 'utils/colors';

const ICON_SIZE = 18;

const SidePanel = () => (
  <SidePanelWrapper>
    <Heading>Menu</Heading>
    <div>
      <MenuItem isSelected>
        <Edit2 size={ICON_SIZE} color={colors.primary} />
        <MenuItemText isSelected>Messages</MenuItemText>
      </MenuItem>
      <MenuItem>
        <Settings size={ICON_SIZE} />
        <MenuItemText>Settings</MenuItemText>
      </MenuItem>
    </div>
  </SidePanelWrapper>
);

export default SidePanel;
