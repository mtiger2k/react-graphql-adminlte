import React from 'react';
import { history } from '../../../routes';

import SidebarMenuWrapper from '../../../lib/sidebar/SidebarMenuWrapper';
import SidebarMenuHeader from '../../../lib/sidebar/SidebarMenuHeader';
import TreeMenu from '../../../lib/sidebar/TreeMenu';

const mainMenus = [
  {
    key: 1,
    id: 1,
    icon: 'fa fa-folder',
    title: 'Demo',
    items: [
      { key: 11, id: 11, title: 'Single Upload', url: '/singleUpload' },
      { key: 12, id: 12, title: 'Multiple upload', url: '/multipleUpload' },
    ],
  }
];

const labelsMenus = [
  {
    key: 91,
    id: 91,
    iconColor: 'aqua',
    title: 'Documentation',
    showLabel: false,
  },
  {
    key: 92,
    id: 92,
    iconColor: 'aqua',
    title: 'About',
    showLabel: false,
  }
];


function onMenuClick(item) {
  if (item.url) {
    history.push(item.url);
  }
}

export default function SidebarMenu() {
  return (
    <SidebarMenuWrapper>
      <SidebarMenuHeader title="MAIN NAVIGATION" />
      {mainMenus.map((menu) =>
        <TreeMenu
          {...menu}
          onClick={() => onMenuClick(menu)}
          onItemClick={onMenuClick}
        />
      )}
      <SidebarMenuHeader title="LABELS" />
      {labelsMenus.map((menu) =>
        <TreeMenu
          {...menu}
          onClick={() => onMenuClick(menu)}
          onItemClick={onMenuClick}
        />
      )}
    </SidebarMenuWrapper>
  );
}
