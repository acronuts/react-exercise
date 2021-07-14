import styled from 'styled-components';
import { colors } from '../style/Theme';

export const Form = styled.form`
  margin-top: 4rem;
  margin-left: -4.3rem;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0.6rem;
  outline: none;
  border: 1px solid ${colors.blue};
  border-radius: 4px;
  background: inherit;
  font-size: 1.2rem;
  /* font-weight: 400; */
`;

export const Label = styled.label`
  position: relative;
  top: -6px;
  left: 86px;
  padding: 0 4px;
  background-color: #fafafa;
  font-size: 13px;
  z-index: 1;
  min-width: 76px;
  height: 18px;
  color: ${colors.blue}
`;