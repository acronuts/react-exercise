import React, { Fragment } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ResultsContainer from '../components/ResultsContainer';

const ResultsPage = props => {
  const history = useHistory()
  let data = props.location.state;

  if (data === undefined) {
    data = ''
    history.push('/')
  }

  return (
    <Fragment>
      <Header />
      <ResultsContainer data={data} />
    </Fragment>
  );
};

export default withRouter(ResultsPage);
