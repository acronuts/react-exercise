import React, { Fragment, useState } from 'react';
import { Button } from '../../style/Button';
import { Form } from '../../style/Form';
import { SearchBoxWrapper } from './styled';

const SearchBox = () => {
    const [disabled, setDisabled] = useState(true)

  return (
    <Fragment>
      <SearchBoxWrapper>
        <Form type='search' placeholder='Search for article, seller or article number'></Form>
        <Button type='submit' disabled={disabled}><i class="fas fa-search"></i>SEARCH</Button>
      </SearchBoxWrapper>
    </Fragment>
  );
};

export default SearchBox;
