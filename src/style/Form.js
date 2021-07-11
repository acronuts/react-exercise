import styled from 'styled-components';
import { colors } from '../style/Theme';

export const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0.6rem;
  outline: none;
  border: 2px solid ${colors.blue};
  border-radius: 4px;
  background: inherit;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Form = styled.form`
  margin-top: 4rem;
  margin-left: -4.1rem;
  display: flex;
`;
