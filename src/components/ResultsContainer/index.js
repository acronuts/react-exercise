import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../style/Button';
import ItemCard from '../ItemCard';
import {
  ResultContainer,
  ResultHeader,
  ItemsContainer,
  NoResultsContainer,
} from './styled';
import notfound from '../../assets/notfound.png';
import SearchContainer from '../SearchContainer';
import ScrollButton from '../Helpers/ScrollButton';

const ResultsContainer = ({ data }) => {
  const [results, setResults] = useState(data);
  const [selectedSort, setSelectedSort] = useState('relevance');

  const history = useHistory();
  const query = history.location.pathname.replace('/search/', '');
  const articles = data.articles;

  useEffect(() => {
    setResults(data);
  }, [data]);

  console.log(data)

  const SortDropdown = () => {
    return (
      <label>
        Sort by:{' '}
        <select
          id='item-sort'
          value={selectedSort}
          onChange={e => setSelectedSort(e.target.value)}>
          <option value='relevance'>Relevance</option>
          <option value='lowest'>Price: low to high</option>
          <option value='highest'>Price: high to low</option>
          <option value='ending'>Ending soon</option>
          <option value='alphabetical'>Alphabetical</option>
          <option value='recent'>Recenlty added</option>
        </select>
      </label>
    );
  };

  useEffect(() => {
    const sortResults = () => {
      let sorted = [];
      switch (selectedSort) {
        case 'relevance':
          sorted = articles.sort(()=> Math.random() - 0.5);
          break;
        case 'highest':
          sorted = articles.sort(
            (a, b) =>
              (b.buyNowPrice != null ? b.buyNowPrice : -Infinity) -
              (a.buyNowPrice != null ? a.buyNowPrice : -Infinity)
          );
          break;
        case 'lowest':
          sorted = articles.sort(
            (a, b) =>
              (a.buyNowPrice != null ? a.buyNowPrice : Infinity) -
              (b.buyNowPrice != null ? b.buyNowPrice : Infinity)
          );
          break;
        case 'alphabetical':
          sorted = articles.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'ending':
          sorted = articles.sort(
            (a, b) => new Date(a.endDate) - new Date(b.endDate)
          );
          break;
        case 'recent':
          sorted = articles.sort((a, b) => b.id - a.id);
          break;
        default:

          break;
      }
      setResults([...sorted]);
    };
    sortResults();
  }, [articles, selectedSort]);

  return (
    <Fragment>
      {data.totalCount > 0 ? (
        <ResultContainer>
          <ResultHeader>
            <div>
              <p>
                Total results found for "<strong>{query}</strong>": {data.totalCount}
              </p>{' '}
              {data.totalCount > 61 ? (
                <p>Showing {data.articles.length} results</p>
              ) : null}
            </div>
            <span>
              <SortDropdown />
              <Button
                back
                onClick={() => history.goBack()}
                style={{ width: 160 }}
                >
                New Search
              </Button>
            </span>
          </ResultHeader>
          <ItemsContainer>
            {articles.map(item => (
              <ItemCard item={item} key={item.id} />
            ))}
          </ItemsContainer>
        </ResultContainer>
      ) : (
        <Fragment>
          <SearchContainer />
          <NoResultsContainer>
            <p style={{ fontSize: 26, fontWeight: 600 }}>
              Sorry, we couldn't find any results for "{query}"
            </p>
            <img src={notfound} alt='nothing to be found' />
          </NoResultsContainer>
        </Fragment>
      )}
      <ScrollButton
        name={
          <Fragment>
            <i className='fas fa-arrow-up'></i>top
          </Fragment>
        }
      />
    </Fragment>
  );
};

export default ResultsContainer;
