import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const SidebarWrapper = styled.div`
  display: grid;
  @media (min-width: 45rem) {
    grid-template: 8rem max-content / 8rem auto;
    border: 1px solid;
    height: min-content;
  }
  @media (min-width: 45rem) {
    
  }
`;

const Logo = styled.div`
  place-self: center;
`;

const Navigation = styled.nav`
`;

const Seperator = styled.div`
  height: 10rem;
  width: 0.5rem;
  background-color: #fff;
  margin: 0 0.5rem;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>
        <Link href='/'>
          <a>
            <img src='/favicon.svg' alt='Test!' style={{ width: '100px' }} />
          </a>
        </Link>
      </Logo>
      <Seperator />
      <Navigation>
        <ul>
          <li>
            <Link href='/post'>
              <a>Post</a>
            </Link>
          </li>
          <li>
            <Link href='/category'>
              <a>Category</a>
            </Link>
          </li>
          <li>
            <Link href='/badge'>
              <a>Badge</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </Navigation>
    </SidebarWrapper>
  );
};

export default Sidebar;
