import React, { PropTypes } from 'react';

const defaultProps = {
  icon: 'fa fa-users',
  iconColor: 'aqua',
};

function NotificationsMenuItem({ icon, iconColor, children, onClick }) {
  return (
    <li>
      <a style={{ cursor: 'pointer' }} onClick={onClick}>
        <i className={`${icon} text-${iconColor}`}></i> {children}
      </a>
    </li>
  );
}

NotificationsMenuItem.defaultProps = defaultProps;

export default NotificationsMenuItem;
