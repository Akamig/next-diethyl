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
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
            rel='stylesheet'
            type='text/css'
          />
          <link
            href='//rsms.me/inter/inter.css'
            rel='stylesheet'
            type='text/css'
          ></link>
          <link
            href='//rsms.me/inter/inter-display.css'
            rel='stylesheet'
            type='text/css'
          ></link>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}
