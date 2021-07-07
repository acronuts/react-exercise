import React, { Fragment } from 'react';
import { HeaderContainer, Logo, LogoWrapper } from './styled';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <Link to='/'>
          <LogoWrapper>
            <Logo src={logo} alt='logo' />
          </LogoWrapper>
        </Link>
      </HeaderContainer>
    </Fragment>
  );
};

export default Header;
