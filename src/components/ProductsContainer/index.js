import React, { Fragment, useState, useEffect } from 'react';
import {
  ImageProductContainer,
  ProductContainer,
  ProductInfoContainer,
  TitleContainer,
  SellerPriceContainer,
  DescriptionContainer,
  ProductHeader,
  NoArticle,
} from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button } from '../../style/Button';
import Spinner from '../Spinner';
import ScrollButton from '../Helpers/ScrollButton';
import pagenotfound from '../../assets/404-not-found.png';

const ProductsContainer = ({ article }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const history = useHistory();

  useEffect(() => {
    const articleUrl = `https://www.ricardo.ch/api/frontend/recruitment/article-details?apiToken=${process.env.REACT_APP_API_TOKEN}&articleId=${article.articleId}`;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(articleUrl);
        setData(result.data);
        const userUrl = `https://www.ricardo.ch/api/frontend/recruitment/user?apiToken=${process.env.REACT_APP_API_TOKEN}&userId=${result.data.sellerId}`;
        const userResult = await axios(userUrl);
        setUserInfo(userResult.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [article.articleId, data.sellerId]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProductHeader>
            <Button back onClick={() => history.goBack()}>
              Back
            </Button>
          </ProductHeader>
          <ProductContainer>
            {isError ? (
              <NoArticle>
                <img src={pagenotfound} alt='' />
                <Button back onClick={() => history.push('/')}>
                  Home
                </Button>
              </NoArticle>
            ) : (
              <Fragment>
                <ImageProductContainer src={data.imageUrl} />
                <ProductInfoContainer>
                  <TitleContainer>
                    <h1>{data.title}</h1>
                    <h4>{data.subtitle}</h4>
                  </TitleContainer>
                  <SellerPriceContainer>
                    <p style={{ fontSize: 18 }}>
                      <strong>Seller:</strong> {userInfo.name}
                    </p>
                    {data.price ? (
                      <p style={{ fontSize: 18 }}>
                        <strong>Price:</strong> {data.price.toFixed(2)} CHF
                      </p>
                    ) : null}
                  </SellerPriceContainer>
                  <DescriptionContainer
                    dangerouslySetInnerHTML={{ __html: data.descriptionHtml }}
                  />
                </ProductInfoContainer>
                <ScrollButton
                  centered
                  name={
                    <Fragment>
                      <i className='fas fa-arrow-up'></i>top
                    </Fragment>
                  }
                />
              </Fragment>
            )}
          </ProductContainer>
        </>
      )}
    </Fragment>
  );
};

export default ProductsContainer;
