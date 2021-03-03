export const breakpoint = {
  sm: '36rem',
  md: '62rem',
  lg: '75rem',
  xl: '120rem',
};

export const mediaQuery = {
  sm: `@media screen and (min-width: ${breakpoint.sm})`,
  md: `@media screen and (min-width: ${breakpoint.md})`,
  lg: `@media screen and (min-width: ${breakpoint.lg})`,
  xl: `@media screen and (min-width: ${breakpoint.xl})`,
};

export const font = {
  main:
    'Inter, Spoqa Han Sans Neo, Helvetica, Helvetica Neue, Noto Sans, -apple-system,BlinkMacSystemFont, Segoe UI, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  code: 'Iosevka, monospace',
};

export const color = {
  text: 'hsl(0, 0%, 13%)',
  sub: 'hsl(0, 0%, 87%)',
  background: 'hsl(0, 0%, 73%)',
  highlight: '#81b',
  alt1: '#f07',
  alt2: '#F57',
  alt3: '#7F5',
};

export const theme = {
  name: 'default',
  breakpoint,
  mediaQuery,
  color,
  font,
  fontSize: {
    xs: 0.75,
    sm: 1,
    md: 1.125,
    lg: 1.5,
    xl: 2,
  },
  lineHeight: {
    single: 1,
    narrow: 1.25,
    article: 1.6,
  },
  letterSpace: [-0.05, -0.03],
  space: [0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 1],
};

export default theme;
