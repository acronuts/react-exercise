import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import ResultsPage from '../pages/ResultsPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search/:searchText' component={ResultsPage} />
        <Route exact path='/article/:articleId' component={ProductPage} />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
    </Router>
  );
};

export default Routes;
