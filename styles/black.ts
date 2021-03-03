import { Black } from 'styles'
import defaultTheme from './default'

const theme = {
  ...defaultTheme,
  name: 'black',
  color: {
    ...defaultTheme.color,
    text: 'hsl(170, 40%, 65%)',
    background: 'hsl(308, 38%, 10%)',
    sub: 'hsl(0, 0%, 5%)',
  },
}

export default theme
