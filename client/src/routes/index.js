import React from 'react';
import Layout from '../app/components/layout/Layout';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import HomePage from '../pages/HomePage'

const history = createHistory()

const routes = () => {

  return (
    
    <Switch>
      <Layout>
      	<Route path="/" exact={true} component={HomePage}/>
      </Layout>
    </Switch>
    
  );
};

export default routes
export { history }