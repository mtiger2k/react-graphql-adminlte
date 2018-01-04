import React, { PropTypes } from 'react';

function StatBox({
  count, countSign, title,
  iconClasses, url, urlText, color,
}) {
  return (
    <div className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>
          {count}
          <sup style={{ fontSize: 20 }}>{countSign}</sup>
        </h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        <i className={iconClasses}></i>
      </div>
      <a href={url} className="small-box-footer">
        {urlText} <i className="fa fa-arrow-circle-right"></i>
      </a>
    </div>
  );
}


export default StatBox;
