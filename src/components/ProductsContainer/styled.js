import styled from 'styled-components';
import { colors } from '../../style/Theme';

export const ProductContianer = styled.section`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid black; */
  margin: 5% 5%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageProductContainer = styled.img`
  width: 49%;
  /* min-width: 500px; */
  height: 500px;
  margin-right: 2%;
  object-fit: contain;
  background-color: #fff;
  padding: 15px;
  /* border: 1px solid red; */
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  width: 49%;
  /* min-width: 500px; */
  padding: 20px;
  flex-direction: column;
  /* justify-content: space-between; */
  overflow: hidden;
  background-color: #fff;
  /* border: 1px solid green; */
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 5%;
  }
`;

export const TitleContainer = styled.div`
  padding: 0 0 2rem 0;
  border-bottom: 2px solid #ccc;
  /* border: 1px solid red; */
`;

export const SellerPriceContainer = styled.div`
  /* display: flex; */
  /* flex: 3; */
  /* flex-direction: column; */
  /* justify-content: center; */
  padding: 2rem 0;
  border-bottom: 2px solid #ccc;
  /* border: 1px solid green; */
`;

export const DescriptionContainer = styled.div`
  padding: 2rem 0;
  ul li {
    margin-left: 2em;
  }
  /* border: 1px solid purple; */
`;
