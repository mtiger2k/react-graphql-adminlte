import React, { PropTypes } from 'react';

function TabHeader({ children }) {
  return (
    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
      {children}
    </ul>
  );
}


export default TabHeader;
