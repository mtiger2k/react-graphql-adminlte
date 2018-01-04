import React, { PropTypes } from 'react';

function PageHeader({ title, description, children }) {
  return (
    <section className="content-header">
      <h1>
        {title}{' '}<small>{description}</small>
      </h1>
      {children}
    </section>
  );
}


export default PageHeader;
