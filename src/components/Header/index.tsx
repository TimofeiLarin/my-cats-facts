import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar, LogoWrapper, Logo, NavItem, NavItems } from './Header.styles';

const Header: React.FC = React.memo(() => {
  return (
    <NavBar>
      <Link to='/'>
        <LogoWrapper>
          <Logo src='./assets/image/logo.png' alt='Logotype' />
          <NavItem>Cat facts</NavItem>
        </LogoWrapper>
      </Link>
      <NavItems>
        <Link to='/list-of-facts'>
          <NavItem color='lightText' paddingRight>
            facts list
          </NavItem>
        </Link>
        <Link to='/random-fact'>
          <NavItem color='lightText'>random fact</NavItem>
        </Link>
      </NavItems>
    </NavBar>
  );
});

export default Header;
