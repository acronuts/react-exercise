import React, { Fragment } from 'react';
import { HeaderContainer, Logo, LogoWrapper } from './styled';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <LogoWrapper>
          <Link to='/'>
            <Logo src={logo} alt='logo' />
          </Link>
        </LogoWrapper>
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;
