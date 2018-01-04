import React, { PropTypes } from 'react';

function TabPane({ id, children, active }) {
  return (
    <div className={active?'tab-pane active':'tab-pane'} id={id}>
      {children}
    </div>
  );
}


export default TabPane;
