import styled from 'styled-components';

export const SearchPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const ErrorMessage = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  p {
    margin: 1rem 0;
  }
`