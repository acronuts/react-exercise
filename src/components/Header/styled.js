import styled from 'styled-components';
import { colors } from '../../style/Theme';

export const HeaderContainer = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 120px;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: 300px;
  padding-left: 15%;
`;

export const HeaderTextContainer = styled.div`
  margin: 0 5%;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 30%;
    margin-right: 0;
    padding-left: 5%;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.ricardoOrange};
  p {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 470px) {
    p {
      font-size: 1rem;
    }
  }
`;
