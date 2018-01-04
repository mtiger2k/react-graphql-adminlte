import React, { PropTypes } from 'react';

function HeaderWrapper({ children }) {
  return (
    <header className="main-header">
      {children}
    </header>
  );
}


export default HeaderWrapper;
