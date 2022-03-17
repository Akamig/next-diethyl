import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeProvider from '../context/providers';
import { Theme } from 'components/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Theme>
        <Head>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}
