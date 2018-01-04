import React, { PropTypes } from 'react';

import UserMenuBody from './UserMenuBody';
import UserMenuLink from './UserMenuLink';
import UserMenuFooter from './UserMenuFooter';
import UserMenuButton from './UserMenuButton';

const defaultProps = {
  image: '/images/no-avatar.png',
  name: 'Full Name',
  title: 'Title',
  description: 'Description',
  links: [],
  buttons: [],
};

function UserMenu({
  image, name, title, description,
  links, buttons,
  onLinkClick, onButtonClick,
}) {
  return (
    <li className="dropdown user user-menu">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        style={{ cursor: 'pointer' }}
      >
        <img src={image} className="user-image" alt="User" />
        <span className="hidden-xs">{name}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="user-header">
          <img src={image} className="img-circle" alt="User" />
          <p>
            {title}
            <small>{description}</small>
          </p>
        </li>
        <UserMenuBody>
          {links.map(link =>
            <UserMenuLink
              {...link}
              onClick={() => onLinkClick(link)}
            />
          )}
        </UserMenuBody>
        <UserMenuFooter>
          {buttons.map(button =>
            <UserMenuButton
              {...button}
              onClick={() => onButtonClick(button)}
            />
          )}
        </UserMenuFooter>
      </ul>
    </li>
  );
}

UserMenu.defaultProps = defaultProps;

export default UserMenu;
