import React, { PropTypes } from 'react';

function PageContent({ children }) {
  return (
    <section className="content">
      {children}
    </section>
  );
}


export default PageContent;
