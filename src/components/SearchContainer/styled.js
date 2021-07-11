import styled from 'styled-components';
import { colors } from '../../style/Theme';

export const SearchPageContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 100%;
  flex: 1;
  /* background-color: purple; */
`;

export const SearchContainerWrapper = styled.section`
  /* display: flex; */
  width: 90%;
  /* margin-top: 300px; */

  /* height: 80%; */
  /* margin-right: 0; */
  /* border: 1px solid black; */
`;

export const Label = styled.label`
  position: relative;
  top: -10px;
  left: 80px;
  padding: 2px;
  background-color: #fafafa;
  font-size: 12px;
  z-index: 1;
  min-width: 65px;
  height: 18px;
  color: ${colors.blue}
`;
