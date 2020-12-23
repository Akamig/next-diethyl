import { keyframes, css, Global } from '@emotion/react';
import styled from '@emotion/styled';

export const white = {
  colors: {
    primary: '#F00',
    primaryLight: '#e456e9',
    primaryDark: '#3d0435',
    bg: '#211',
    text: '#CAA',
    textInvert: '#666',
    greyLight: '#B4B9C1',
    greyMedium: '#414141',
    greyDark: '#2F2F2F',
  },
  fontFamily: {
    main: `Inter, Spoqa Han Sans KR, Spoqa Han Sans JP, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`,
    code: 'Iosevka',
  },
  maxWidth: '1400px',
  maxWidthText: '1026px',
  breakpoint: {
    xs: '576px',
    s: '768px',
    m: '1400px',
    l: '2160px',
  },
  sizes: {
    side: '8rem',
    page: '56.25rem',
  },
};

export const black = {
  colors: {
    primary: '#FD0',
    primaryLight: '#e456e9',
    primaryDark: '#990',
    bg: '#000',
    text: '#CAA',
    textInvert: '#666',
    greyLight: '#B4B9C1',
    greyMedium: '#414141',
    greyDark: '#2F2F2F',
  },
  fontFamily: {
    main: `Inter, Spoqa Han Sans KR, Spoqa Han Sans JP, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`,
    code: 'Iosevka',
  },
  maxWidth: '1400px',
  maxWidthText: '1026px',
  breakpoint: {
    xs: '576px',
    s: '768px',
    m: '1400px',
    l: '2160px',
  },
  sizes: {
    side: '8rem',
    page: '56.25rem',
  },
};

export const globalStyles = (
  <Global
    styles={css`
      * {
        color: ${black.colors.text};
        background: #000
      }
      body {
        margin: auto;
      }
    `}
  />
);
