import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import Navbar from '../navbar/navbar';
import MainContents from '../MainContents/main-contents';
import Footer from '../Footer/footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Main = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    overflow-x: hidden;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 100px auto;
    max-width: 1000px;
  }
`;

const Layout = ({ children, title }: Props) => {
  return (
  <Main>
    <title>{title}</title>
    <Navbar />
        <MainContents>{children}</MainContents>
    <Footer />
  </Main>
);
};

export default Layout;
