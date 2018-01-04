import React, { PropTypes } from 'react';

function SidebarMenuWrapper({ children }) {
  return (
    <ul className="sidebar-menu" data-widget="tree">
      {children}
    </ul>
  );
}


export default SidebarMenuWrapper;
