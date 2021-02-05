import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, useTheme, Global } from '@emotion/react';
import { globalStyle, themes } from '../styles/global.ts';

function GlobalStyle(props) {
  const theme = useTheme();
  return (
    <Global
      styles={{
        ...globalStyle,
        html: {
          color: theme.textColor,
          backgroundColor: theme.bgColor,
          fontFamily: theme.fontFamily,
        },
      }}
      {...props}
    />
  );
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(themes.dark);

  const onClickLight = (e) => {
    setTheme(themes.light);
  };
  const onClickDark = (e) => {
    setTheme(themes.whacked);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
      <button onClick={onClickLight}>Light!</button>
      <button onClick={onClickDark}>Dark!</button>
    </ThemeProvider>
  );
}
