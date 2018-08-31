import React from 'react';
import { connect } from 'react-redux';
import { MessageCircle, LogOut } from 'react-feather';
import { SidePanelWrapper, Heading, MenuItem, MenuItemText } from './styles';
import { logOutUser } from 'redux/auth/actions';
import colors from 'utils/colors';

const ICON_SIZE = 18;

const SidePanel = ({ logOutUser }) => (
  <SidePanelWrapper>
    <Heading>Menu</Heading>
    <div>
      <MenuItem isSelected>
        <MessageCircle size={ICON_SIZE} color={colors.primary} />
        <MenuItemText isSelected>Messages</MenuItemText>
      </MenuItem>
      <MenuItem onClick={logOutUser}>
        <LogOut size={ICON_SIZE} />
        <MenuItemText>Log Out</MenuItemText>
      </MenuItem>
    </div>
  </SidePanelWrapper>
);

export default connect(null, { logOutUser })(SidePanel);
