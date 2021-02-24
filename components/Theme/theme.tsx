import React, { Fragment, useEffect } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { Light, Dark, Black, Weird } from '../../styles/index';
import { useThemeValue } from 'context/ThemeContext';

export type ThemeMode = 'dark' | 'light' | 'black' | 'weird';

export const THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark',
  BLACK: 'black',
  WEIRD: 'weird',
};

export const ThemeOptions = {
  [THEME_OPTIONS.DARK]: Dark,
  [THEME_OPTIONS.LIGHT]: Light,
  [THEME_OPTIONS.BLACK]: Black,
  [THEME_OPTIONS.WEIRD]: Weird,
};

export const isDarkMode = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const Theme = ({ children }) => {
  const [{ theme, selectedTheme }, dispatch] = useThemeValue();

  useEffect(() => {
    if (isDarkMode()) {
      dispatch({
        type: THEME_OPTIONS.DARK,
      });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          '&, &:before, &:after': {
            margin: 0,
            padding: 0,
            boxSizing: 'inherit',
          },
          'html, body': {
            boxSizing: 'border-box',
            position: 'relative',
            minHeight: '100%',
            margin: 0,
            font: '400 100%/1.3 ' + theme.font.main,
            wordBreak: 'keep-all',
            textRendering: 'optimizeLegibility',
            color: theme.color.text,
            backgroundColor: theme.color.background,
          },
          code: {
            fontFamily: theme.font.code,
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};
