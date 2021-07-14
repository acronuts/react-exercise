import React, { Fragment } from 'react';
import {
  HeaderContainer,
  Logo,
  HeaderText,
  HeaderTextContainer,
} from './styled';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <Link to='/'>
          <Logo src={logo} alt='logo' />
        </Link>
        <HeaderTextContainer>
          <HeaderText>
            <p className='bottom'>The largest Swiss online marketplace.</p>
          </HeaderText>
        </HeaderTextContainer>
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;
