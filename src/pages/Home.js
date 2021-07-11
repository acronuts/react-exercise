import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchContainer from '../components/SearchContainer/index';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <SearchContainer />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
