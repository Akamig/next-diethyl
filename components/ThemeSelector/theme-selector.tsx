import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeMode, THEME_OPTIONS } from '../Theme/theme';
import { useThemeValue } from '../../context/ThemeContext';
import Radio from '../Radio/Radio';

interface Props {}

const Container = styled.label``;

export const ThemeSelector: React.FC<Props> = React.memo(() => {
  const [{ theme, selectedTheme }, dispatch] = useThemeValue();

  const changeLight = () =>
    dispatch({
      type: THEME_OPTIONS.LIGHT,
    });
  const changeDark = () =>
    dispatch({
      type: THEME_OPTIONS.DARK,
    });
  const changeBlack = () =>
    dispatch({
      type: THEME_OPTIONS.BLACK,
    });
  const changeWeird = () =>
    dispatch({
      type: THEME_OPTIONS.WEIRD,
    });

  return (
    <>
      <Container for='theme' />
      <input
        type='radio'
        id='theme'
        checked={selectedTheme === THEME_OPTIONS.LIGHT}
        onChange={changeLight}
      />
      <input
        type='radio'
        id='theme'
        checked={selectedTheme === THEME_OPTIONS.DARK}
        onChange={changeDark}
      />
      <input
        type='radio'
        id='theme'
        checked={selectedTheme === THEME_OPTIONS.BLACK}
        onChange={changeBlack}
      />
      <input
        type='radio'
        id='theme'
        checked={selectedTheme === THEME_OPTIONS.WEIRD}
        onChange={changeWeird}
      />
    </>
  );
});

export default ThemeSelector;
