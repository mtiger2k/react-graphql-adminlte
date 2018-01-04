import React, { PropTypes } from 'react';

function UserMenuBody({ children }) {
  return (
    <li className="user-body">
      <div className="row">
        {children}
      </div>
    </li>
  );
}


export default UserMenuBody;
