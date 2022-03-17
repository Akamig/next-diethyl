import defaultTheme from './default';

const theme = {
  ...defaultTheme,
  name: 'weird',
  color: {
    text: '#FF0',
    sub: '#F0F',
    background: '#0F0',
  },
  font: {
    main: `'Comic Neue', 'Wadag', 'YJ INITIALPOSITIVE','Gulimche', 'Gulim', 'Baekmuk Gulim', 'sans-serif'`,
  },
  fontSize: {
    xs: 2.75,
    sm: 2,
    md: 2.125,
    lg: 2.5,
    xl: 4,
  },
};

export default theme;
