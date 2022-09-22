import { createTheme } from '@vanilla-extract/css';
import { colorTokens } from './colormode.css';

export const primaryColors = {
  text: 'rgba(6,6,19,1)',
  reading: 'rgba(16,15,40,1)',
  background: 'rgba(239,239,239,1)',
  primary: {
    default: 'rgba(31,27,216,1)',
    hovered: '#5854FD',
    pressed: '#1A17BC',
  },
  // secondary: primaryColors.purple[500],
  muted: '#b6b6b9',
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
  // blue: `linear-gradient(180deg, #00D2FF 0%, ${colors.secondary} 100%)`,
};

export const light = createTheme(colorTokens, {
  colors,
  gradients,
});
