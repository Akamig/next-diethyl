import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href='/about'>
          <a>About</a>
        </Link>
        // nav component goes here
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>This is a finger lickin' footer, component goes here</span>
    </footer>
  </>
);

export default Layout;
