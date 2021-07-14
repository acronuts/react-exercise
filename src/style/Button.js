import styled, { css } from "styled-components";
import { colors } from "./Theme";

export const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 10%;
    padding: 0.8rem 1%;
    font-size: 1.1rem;
    border: 1px solid ${colors.blue};
    border-radius: 4px;
    overflow: hidden;
    color: ${colors.blue};
    font-weight: 600;
    margin-left: 2%;
    :hover:enabled {
        background-color: ${colors.blue};
        color: white;
        cursor: pointer;
    }
    @media screen and (max-width: 1200px) {
        span {
            display: none;
        }
    }

    ${props => props.back &&
        css`
            border-color: ${colors.ricardoOrange};
            background-color: white;
            color: ${colors.ricardoOrange};
            height: 40px;
            :hover:enabled {
                background-color: ${colors.ricardoOrange};
                color: white;
            }
        `}
`

export const ScrollButtonStyle = styled.button`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 60px;
  height: 60px;
  right: ${props => props.centered ? '50%' : '3%'};
  bottom: 4%;
  font-size: 1rem;
  z-index: 1;
  cursor: pointer;
  color: ${colors.ricardoOrange};
  background-color: inherit;
  border: none;
  border-radius: 30px;

  :hover {
    background-color: ${colors.ricardoOrange};
    color: white;
  }

  i {
    font-size: 2rem;
  }

  ${props =>
    props.centered &&
    css`
      position: fixed;
      right: 50%;
      bottom: 3%;
    `}
  ${props =>
    props.right &&
    css`
      position: fixed;
      right: 3%;
      bottom: 3%;
    `}
`;
