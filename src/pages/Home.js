import React, { Fragment } from 'react';
import Header from '../components/Header';
import { Form } from '../style/Form';
import SearchBox from './../components/SearchBox/index';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <SearchBox />
    </Fragment>
  );
};

export default Home;
