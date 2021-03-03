import defaultTheme from './default';

const theme = {
  ...defaultTheme,
  name: 'dark',
  color: {
    ...defaultTheme.color,
    text: 'hsl(0, 0%, 85%)',
    background: 'hsl(170, 40%, 23%)',
    sub: 'hsl(192, 60%, 15%)',
  },
};

export default theme;
