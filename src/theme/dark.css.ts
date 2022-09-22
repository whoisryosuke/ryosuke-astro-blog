import { createTheme } from '@vanilla-extract/css';
import { colorTokens } from './colormode.css';

export const primaryColors = {
  text: 'rgba(234,234,241,1)',
  reading: 'rgba(221,221,228,1)',
  background: 'rgba(7,7,11,1)',
  primary: {
    default: 'rgba(72,69,239,1)',
    hovered: '#7A77FD',
    pressed: '#2D2AC5',
  },
  // secondary: primaryColors.purple[500],
  muted: '#f6f6f9',
  highlight: 'hsla(205, 100%, 40%, 0.125)',

  success: 'green',
  message: 'blue',
  warning: 'yellow',
  danger: 'red',
};

export const colors = {
  ...primaryColors,
};

export const gradients = {
  // subtle: `linear-gradient(180deg, ${colors.blue['500']} 0%, ${colors.secondary} 100%)`,
  // purple: `linear-gradient(180deg, ${colors.primary} 0%, #A000C4 100%)`,
  blue: {
    default: `linear-gradient(90deg, #1F1BD8 0%, #4845EF 36.1%);`,
    hover: `linear-gradient(90deg, #4845EF 0%, #1F1BD8 36.1%);`
  },
};

export const dark = createTheme(colorTokens, {
  colors,
  gradients,
});
