import styled from 'styled-components';

export const ProductContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 5% 5% 5%;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const NoArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 75%;
    }
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 2% 5% 0 5%;
`;

export const ImageProductContainer = styled.img`
  width: 49%;
  height: 500px;
  margin-right: 2%;
  object-fit: contain;
  background-color: #fff;
  padding: 15px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  width: 49%;
  padding: 20px;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 5%;
  }
`;

export const TitleContainer = styled.div`
  padding-bottom: 2rem;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: 5%;
    bottom: 0;
    width: 90%;
    padding: 2rem 0;
    border-bottom: 3px solid #ccc;
  }
  h1 {
    margin-bottom: 3px;
  }
`;

export const SellerPriceContainer = styled.div`
  padding: 1.6rem 0;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: 5%;
    width: 90%;
    padding: 2.2rem 0;
    border-bottom: 3px solid #ccc;
  }
  p {
    margin-bottom: 5px
  }
`;

export const DescriptionContainer = styled.div`
  padding-top: 2.8rem;
  li {
    margin-left: 2em;
  }
  ul,
  ol {
    margin: 1rem 0;
  }
`;
