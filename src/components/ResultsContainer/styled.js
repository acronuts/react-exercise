import styled from 'styled-components';
import { colors } from '../../style/Theme';

export const ResultContainer = styled.section`
  display: flex;
  margin: 0 2rem;
  flex-direction: column;
  padding: 30px 15px;
  select {
    width: 9rem;
    height: 1.8rem;
    color: ${colors.ricardoOrange};
    font-size: 1rem;
    border: none;
    background-color: inherit;
    outline: none;
  }
  label {
    color: ${colors.ricardoOrange};
    font-weight: 600;
  }
`;

export const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25rem;
    margin-right: 2rem;
  }
  p {
    margin-bottom: 2px;
  }
  @media screen and (max-width: 820px) {
    span:first-child {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    span:nth-child(2) {
      flex-direction: column-reverse;
      align-items: flex-end;
      width: 15rem;
      height: 5rem;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  background-color: #fff;
  margin: 3rem 2rem;
  padding: 10px 15px;
`;

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 3rem 5% 0 5%;
  img {
    min-width: 27.5%;
  }
`;
