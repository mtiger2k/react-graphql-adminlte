import React, { PropTypes } from 'react';

function ControlbarWrapper({ children }) {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      {children}
    </aside>
  );
}

export default ControlbarWrapper;
