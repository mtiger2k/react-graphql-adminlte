import React, { PropTypes } from 'react';

function TasksMenuItem({ progress, color, children, onClick }) {
  return (
    <li>
      <a style={{ cursor: 'pointer' }} onClick={onClick}>
        <h3>
          {children}
          <small className="pull-right">{progress}%</small>
        </h3>
        <div className="progress xs">
          <div
            className={`progress-bar progress-bar-${color}`}
            style={{ width: `${progress}%` }} role="progressbar"
            aria-valuenow={`${progress}`} aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="sr-only">{progress}% Complete</span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default TasksMenuItem;
