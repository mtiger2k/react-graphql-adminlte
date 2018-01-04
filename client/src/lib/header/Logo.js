import React, { PropTypes } from 'react';

function Logo({ children, onClick }) {
  return (
    <a className="logo" style={{ cursor: 'pointer' }} onClick={onClick}>
      {children}
    </a>
  );
}


export default Logo;
