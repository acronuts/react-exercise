import React, { Fragment } from 'react';
import Header from '../components/Header';
import ProductsContainer from './../components/ProductsContainer/index';

const ProductPage = props => {
  let article = props.location.state;

  if (article === undefined) {
    article = { articleId: props.match.params.articleId };
  }

  return (
    <Fragment>
      <Header />
      <ProductsContainer article={article} />
    </Fragment>
  );
};

export default ProductPage;
