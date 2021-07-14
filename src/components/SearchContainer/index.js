import React, { Fragment, useState } from 'react';
import { Button } from '../../style/Button';
import { Form, Input, Label } from '../../style/Form';
import { SearchContainerWrapper, SearchPageContainer, ErrorMessage } from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SearchContainer = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false)

  const history = useHistory();

  const searchHandler = e => {
    e.preventDefault();
    const url = `https://www.ricardo.ch/api/frontend/recruitment/search?apiToken=${process.env.REACT_APP_API_TOKEN}&searchText=${query}`;
    axios
      .get(url)
      .then(response => {
        history.push(`/search/${query}`, response.data);
        // setError(null)
      })
      .catch(err => setError(err));
  };


  return (
    <Fragment>
      <SearchPageContainer>
        <SearchContainerWrapper>
          <Form onSubmit={searchHandler}>
            <Label>Search text</Label>
            <Input
              type='search'
              value={query}
              onChange={e => setQuery(e.currentTarget.value)}
              placeholder='Search for articles'></Input>
            <Button type='submit' disabled={!query}>
              <i className='fas fa-search'></i>
              <span>SEARCH</span>
            </Button>
          </Form>
          {error ? (
            <ErrorMessage>
              <p>Oops. Something went wrong, please try again</p>
              <Button onClick={() => setShowError(showError ? false : true)} >{showError ? 'Hide error' : 'Show error'}</Button>
              <p>
              {showError ? `Error: ${error.message}` : null}
              </p>
            </ErrorMessage>
          ) : null}
        </SearchContainerWrapper>
      </SearchPageContainer>
    </Fragment>
  );
};

export default SearchContainer;
