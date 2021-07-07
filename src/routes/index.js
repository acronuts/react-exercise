import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import SearchPage from '../pages/SearchPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search/:searchText' component={SearchPage} />
        <Route exact path='/article/:articleId' component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
