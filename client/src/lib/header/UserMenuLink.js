import React, { PropTypes } from 'react';

function UserMenuLink({ text, onClick }) {
  return (
    <div className="col-xs-4 text-center">
      <a style={{ cursor: 'pointer' }} onClick={onClick}>{text}</a>
    </div>
  );
}


export default UserMenuLink;
