import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    position: fixed;
    padding: 0.125rem 0.5rem;
    height: 2rem;
    flex-direction: row;
    background-color: ${(props) => props.theme.bgColor};
  }
  ~ main {
    padding-top: 2rem;
  }
`;

const Nav = styled.nav`
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const Logo = styled.img`
  width: 64px;
  @media screen and (max-width: 900px) {
    width: 32px;
  }
`;

const Item = styled.div`
  margin-left: 0.5rem;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: -0.032em;

  :hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
  }
`;

const Sidebar = () => {
  return (
    <NavWrap>
      <Link href='/'>
        <a>
          <Logo src='/favicon.svg' />
        </a>
      </Link>
      <Nav>
        <Item>
          <Link href='/post'>
            <a>Post</a>
          </Link>
        </Item>
        <Item>
          <Link href='/category'>
            <a>Category</a>
          </Link>
        </Item>
        <Item>
          <Link href='/badge'>
            <a>Badge</a>
          </Link>
        </Item>
        <Item>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </Item>
      </Nav>
    </NavWrap>
  );
};

export default Sidebar;
