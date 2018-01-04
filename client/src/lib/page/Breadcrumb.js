import React, { PropTypes, Component } from 'react';

import BreadcrumbItem from './BreadcrumbItem';

class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return this.props.items.map((item) => <BreadcrumbItem {...item} />);
  }

  render() {
    return (
      <ol className="breadcrumb">
        {this.renderItems()}
      </ol>
    );
  }
}


export default Breadcrumb;
