import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import ThemeSelector from '../ThemeSelector/theme-selector';

const NavWrap = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.color.sub};

  ${(props) => props.theme.mediaQuery.md} {
    position: unset;
  }
`;
const Nav = styled.nav`
  position: sticky;
  display: flex;
  top: 0;

  ${(props) => props.theme.mediaQuery.md} {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 32px;
  margin: 0 auto;
  ${(props) => props.theme.mediaQuery.md} {
    text-align: center;
    width: 100%;
  }
`;

const Item = styled.a`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.125rem 0.25rem;
  letter-spacing: -0.032em;
  width: 100%;
  min-height: 2.5rem;
  background-color: ${(props) => props.theme.color.background};
  border-top: 0.125rem solid ${(props) => props.theme.color.black};
  margin-left: 0.125rem;

  ${(props) => props.theme.mediaQuery.md} {
    border-top: unset;
    margin-left: unset;
    margin-bottom: 0.125rem;
  }

  :hover {
    background-color: ${(props) => props.theme.color.highlight};
    color: ${(props) => props.theme.color.sub};
  }
`;

const Navbar = () => {
  function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <NavWrap>
      <Nav>
        <Link href='/' passHref>
          <Item>
            <Logo className='logo' src='/favicon.svg' />
          </Item>
        </Link>
        <Link href='/post' passHref>
          <Item>Post ⇧</Item>
        </Link>
        <Link href='/category' passHref>
          <Item>Category</Item>
        </Link>
        <Link href='/tag' passHref>
          <Item>Tag</Item>
        </Link>
        <Link href='/badge' passHref>
          <Item>Badge</Item>
        </Link>
        <Link href='/about' passHref>
          <Item>About</Item>
        </Link>
        <Item onClick={toTop}>Top</Item>
      </Nav>
      <ThemeSelector />
    </NavWrap>
  );
};

export default Navbar;
