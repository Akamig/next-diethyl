import React, { ReactNode } from 'react';
import Link from 'next/link';
import Meta from '../Meta/meta';
import Sidebar from '../navbar/sidebar';
import Footer from '../Footer/footer';
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => (
  <>
    <Meta title={title}/>
    <Sidebar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
