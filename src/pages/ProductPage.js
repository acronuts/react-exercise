import React, { Fragment } from 'react';
import Header from '../components/Header';
import ProductsContainer from './../components/ProductsContainer/index';

const ProductPage = (props) => {
  console.log('ProdProps', props)
  const article = props.location.state;
  return (
    <Fragment>
        <Header />
      <ProductsContainer article={article} />
    </Fragment>
  );
};

export default ProductPage;
