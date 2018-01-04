import React, { Component, PropTypes } from 'react';

class PageWrapper extends Component {
  componentDidMount() {
    if (window.$ && window.$.AdminLTE) {
      window.$.AdminLTE.layout.fix();
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        {this.props.children}
      </div>
    );
  }
}


export default PageWrapper;
