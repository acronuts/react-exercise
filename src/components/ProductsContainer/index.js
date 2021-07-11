import React, { Fragment, useState, useEffect } from 'react';
import {
  ImageProductContainer,
  ProductContianer,
  ProductInfoContainer,
  TitleContainer,
  SellerPriceContainer,
  DescriptionContainer,
} from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button } from '../../style/Button';
import Spinner from '../Spinner';

const apiKey = process.env.REACT_APP_API_TOKEN

const ProductsContainer = ({ article }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  //   console.log('article', article.articleId);

  const history = useHistory();

  useEffect(() => {
    // const apiToken = 'd9948f958a74f0adc34faf3ae9526beb477471e5';
    const url = `https://www.ricardo.ch/api/frontend/recruitment/article-details?apiToken=${apiKey}&articleId=${article.articleId}`;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
        const url2 = `https://www.ricardo.ch/api/frontend/recruitment/user?apiToken=${apiKey}&userId=${result.data.sellerId}`;
        const result2 = await axios(url2);
        setUserInfo(result2.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [article.articleId]);

  console.log('loading', data);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductContianer>
          <ImageProductContainer src={data.imageUrl} />
          <ProductInfoContainer>
            <TitleContainer>
              <h1>{data.title}</h1>
              <h4>{data.subtitle}</h4>
            </TitleContainer>
            <SellerPriceContainer>
              <p><strong>Seller:</strong> {userInfo.name}</p>
              {data.price ? <p><strong>Price:</strong> {data.price.toFixed(2)}</p> : null}
            </SellerPriceContainer>
            
            <DescriptionContainer
              dangerouslySetInnerHTML={{ __html: data.descriptionHtml }}
            />
            
            {/* <div>{ReactHtmlParser(data.descriptionHtml)}</div> */}
          </ProductInfoContainer>
        </ProductContianer>
      )}
      <Button onClick={() => history.goBack()}>Go Back</Button>
    </Fragment>
  );
};

export default ProductsContainer;
