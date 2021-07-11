import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../style/Button';
import ItemCard from '../ItemCard';
import { ResultContainer, ItemsContainer } from './styled';

const ResultsContainer = ({ data }) => {
  console.log('resProps', data.articles);

  const history = useHistory();

  return (
    <Fragment>
      <ResultContainer>
        <p style={{ fontSize: 20 }}>Total Count: {data.totalCount}</p>
        <ItemsContainer>
          {data.totalCount > 0 ? (
            data.articles.map(item => <ItemCard item={item} key={item.id} />)
          ) : (
            <div>no results found</div>
          )}
        </ItemsContainer>
      </ResultContainer>
      <Button onClick={() => history.goBack()}>Go Back</Button>
    </Fragment>
  );
};

export default ResultsContainer;
