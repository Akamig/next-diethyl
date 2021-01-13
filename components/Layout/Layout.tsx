import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import Link from 'next/link';
import Meta from '../Meta/meta';
import Sidebar from '../navbar/sidebar';
import Footer from '../Footer/footer';
type Props = {
  children?: ReactNode;
  title?: string;
};

const Main = styled.div`
  display: grid;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: 100px 1fr;
    grid-template-rows: auto auto auto;
    position: 50vw;
    max-width: 1000px;
  }
  margin: 1rem 1rem;
  padding: 1rem;

  & > * {
    border: 1px solid black;
  }

  main {
    padding: 0.625rem;
  }
`;

const Layout = ({ children, title }: Props) => (
  <Main>
    <Meta title={title} />
    <Sidebar />
    <main>{children}</main>
    <Footer />
  </Main>
);

export default Layout;
