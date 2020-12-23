import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Meta from '../Meta/meta';
import Sidebar from '../navbar/sidebar';
import Footer from '../Footer/footer';

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  @media screen and (min-width: 45rem) {
    grid-template: min-content 2rem / min-content minmax(45rem, 56.25rem);
    margin: 2rem;
  }
  @media screen and (min-width: 25rem) {
    grid: ;
  }
`;

const Contents = styled.main``;

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper>
        <Sidebar />
        <Contents>{children}</Contents>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
