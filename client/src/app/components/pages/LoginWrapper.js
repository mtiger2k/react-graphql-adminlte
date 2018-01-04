import React, { Component, PropTypes } from 'react';

export default class LoginBox extends Component {
  componentWillMount() {
    window.$('body').addClass('hold-transition login-page');
  }

  render() {
    return (
      <div className="login-box">
        {this.props.children}
      </div>
    );
  }
}

