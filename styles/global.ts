export const globalStyle = {
  '&, &:before, &:after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
  },
  html: {
    height: '100%',
    boxSizing: 'border-box',
  },
  body: {
    position: 'relative',
    minHeight: '100%',
    margin: 0,
    font:
      '400 100%/1.3 Inter, SpoqaHanSans, Spoqa Han Sans JP, -apple-system,BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    wordBreak: 'keep-all',
    textRendering: 'optimizeLegibility',
  },
  code: {
    fontFamily: 'Iosevka, monospace',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};

export const themes = {
  light: {
    textColor: 'hsl(0, 0%, 13%)',
    darkerColor: 'hsl(0, 0%, 73%)',
    bgColor: 'hsl(0, 0%, 93%)',
  },
  dark: {
    textColor: 'hsl(0, 0%, 80%)',
    darkerColor: 'hsl(0, 0%, 22%)',
    bgColor: 'hsl(0, 0%, 13%)',
  },
  whacked: {
    textColor: 'hsl(295, 100%, 50%)',
    bgColor: 'hsl(120, 100%, 50%) ',
    fontFamily: 'Comic Sans MS',
    darkerColor: 'hsl(0, 100%, 50%) ',
  },
};
