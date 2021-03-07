import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';

import Header from '../Header/header';
import Navbar from '../navbar/navbar';
import MainContents from '../MainContents/main-contents';
import Footer from '../Footer/footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Main = styled.div`
  margin: 0 auto;
  overflow-x: hidden;
  ${(props) => props.theme.mediaQuery.sm} {
    padding: 0.5rem 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
  margin: 0 auto;
  max-width: 1100px;

  ${(props) => props.theme.mediaQuery.sm} {
    & > * {
      margin: 0.5rem;
      margin-top: 0;
    }
  }
  ${(props) => props.theme.mediaQuery.md} {
    aside {
      margin-right: 0;
  }
`;

const Layout = ({ children, title }: Props) => {
  return (
    <Main>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Header />
        <Navbar />
        <MainContents>{children}</MainContents>
        <Footer />
      </Container>
    </Main>
  );
};

export default Layout;
