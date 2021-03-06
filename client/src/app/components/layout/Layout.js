import React, { PropTypes } from 'react';

import LayoutWrapper from '../../../lib/layout/LayoutWrapper';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Controlbar from './Controlbar';

export default function Layout({ children }) {
  return (
    <LayoutWrapper color="blue">
      <Header />
      <Sidebar />
      {children}
      <Footer />
      <Controlbar />
    </LayoutWrapper>
  );
}

