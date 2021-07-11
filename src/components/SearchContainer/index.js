import React, { Fragment, useState, useEffect } from 'react';
import { Button } from '../../style/Button';
import { Form, Input } from '../../style/Form';
import { Label, SearchContainerWrapper, SearchPageContainer } from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Spinner from '../Spinner';

const apikey = process.env.REACT_APP_API_TOKEN

// console.log('apiToken', apikey)

const SearchContainer = () => {
  const [disabled, setDisabled] = useState(true);
  const [query, setQuery] = useState('');
  // const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  // console.log('initial data', data)
  const history = useHistory()

  // useEffect(() => {
  //   const apiToken = 'd9948f958a74f0adc34faf3ae9526beb477471e5';
  //   const url = `https://www.ricardo.ch/api/frontend/recruitment/search?apiToken=${apiToken}&searchText=${query}`;
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     try {
  //       const result = await axios(url)
  //       setData(result.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     setIsLoading(false)
  //   }
  //   fetchData()
  // }, [])

  const searchHandler = e => {
    e.preventDefault();
    setIsLoading(true)
    // const apiToken = 'd9948f958a74f0adc34faf3ae9526beb477471e5';
    const url = `https://www.ricardo.ch/api/frontend/recruitment/search?apiToken=${apikey}&searchText=${query}`;
    axios
      .get(url)
      .then(response => {
        // setData(response.data);
        // console.log(data);
        history.push(`/search/${query}`, response.data )
      })
      .catch(error => console.log(error.message));
      setIsLoading(false)
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
            // onSubmit={searchHandler}
            placeholder='Search for articles'></Input>
          <Button type='submit'>
            <i class='fas fa-search'></i>SEARCH
          </Button>
          </Form>
          {isLoading ? <Spinner/> : null}
        </SearchContainerWrapper>
      </SearchPageContainer>
    </Fragment>
  );
};

export default SearchContainer;
