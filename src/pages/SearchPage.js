import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultsContainer from '../components/ResultsContainer';

const SearchPage = props => {
  const data = props.location.state;

  return (
    <Fragment>
      <Header />
      <ResultsContainer data={data} />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default SearchPage;
