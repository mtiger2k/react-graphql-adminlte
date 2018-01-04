import React, { PropTypes } from 'react';

function SidebarWrapper({ children }) {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        {children}
      </section>
    </aside>
  );
}

export default SidebarWrapper;
