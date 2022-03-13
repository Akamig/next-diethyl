import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { ThemeOptions, THEME_OPTIONS } from '../components/theme';

export default ({ children }) => {
  let initialTheme = THEME_OPTIONS.LIGHT;
  const initialState = {
    theme: ThemeOptions[initialTheme],
    selectedTheme: initialTheme,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case THEME_OPTIONS.LIGHT:
        return {
          ...state,
          theme: ThemeOptions[THEME_OPTIONS.LIGHT],
          selectedTheme: THEME_OPTIONS.LIGHT,
        };
      case THEME_OPTIONS.DARK:
        return {
          ...state,
          theme: ThemeOptions[THEME_OPTIONS.DARK],
          selectedTheme: THEME_OPTIONS.DARK,
        };
      case THEME_OPTIONS.BLACK:
        return {
          ...state,
          theme: ThemeOptions[THEME_OPTIONS.BLACK],
          selectedTheme: THEME_OPTIONS.BLACK,
        };
      case THEME_OPTIONS.WEIRD:
        return {
          ...state,
          theme: ThemeOptions[THEME_OPTIONS.WEIRD],
          selectedTheme: THEME_OPTIONS.WEIRD,
        };

      default:
        return state;
    }
  };
  return (
    <ThemeProvider initialState={initialState} reducer={reducer}>
      {children}
    </ThemeProvider>
  );
};
