import React, { PropTypes } from 'react';
import classNames from 'classnames';

function BreadcrumbItem({ icon, title, url }) {
  return (
    <li className={classNames({ active: !url })}>
      {url
        ? <a href={url}>{icon ? <i className={icon} /> : ''} {title}</a>
        : title
      }
    </li>
  );
}


export default BreadcrumbItem;
