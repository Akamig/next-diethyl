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
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  ${(props) => props.theme.mediaQuery.sm} {
  }
`;

const Container = styled.div`
  display: grid;

  ${(props) => props.theme.mediaQuery.sm} {
    margin: 0.5rem;
    grid-gap: 0.5rem;
  }
  ${(props) => props.theme.mediaQuery.md} {
    grid-template: auto auto auto / min-content minmax(auto, 1000px);
    grid-template-areas:
      'a a'
      'b c'
      'd d';

    header {
      grid-area: a;
    }
    aside {
      grid-area: b;
    }
    main {
      grid-area: c;
    }
    footer {
      grid-area: d;
    }
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
