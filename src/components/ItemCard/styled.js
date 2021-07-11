import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const StyledLink = styled(Link)`
//   /* display: flex; */
//   text-decoration: none;
//   color: #000;
//   flex: 1;
//   /* &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     } */
// `;

export const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 400px;
  border-radius: 5px;
  border: 1px solid #e4e1dc;
  overflow: hidden;
  margin: 1% 1%;
  text-decoration: none;
  color: #000;

  :hover {
    -webkit-box-shadow: 0px 0px 16px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 16px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 16px -2px rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
`;

export const ImageCardContainer = styled.img`
  width: 100%;
  height: 50%;
  object-fit: contain;
  background-color: #e4e1dc;
`;

export const InfoContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
`;
