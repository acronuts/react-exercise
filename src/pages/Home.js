import React, { Fragment } from 'react';
import Header from '../components/Header';
import SearchContainer from '../components/SearchContainer/index';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <SearchContainer />
    </Fragment>
  );
};

export default Home;
