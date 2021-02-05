import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import Sidebar from '../navbar/sidebar';
import Footer from '../Footer/footer';
import Container from '../Container/container';

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

const Layout = ({ children, title }: Props) => (
  <Main>
    <title>{title}</title>
    <Sidebar />
    <Container>{children}</Container>
    <Footer />
  </Main>
);

export default Layout;
