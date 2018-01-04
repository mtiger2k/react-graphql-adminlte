import React, { PropTypes } from 'react';

function TabIcon({ href, icon, active }) {
  return (
    <li className={active?'active':''}>
      <a href={href} data-toggle="tab">
        <i className={icon}></i>
      </a>
    </li>
  );
}


export default TabIcon;
