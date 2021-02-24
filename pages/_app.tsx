import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeProvider from '../context/providers';
import { Theme } from '../components/Theme/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Theme>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}
