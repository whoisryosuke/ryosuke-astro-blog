import { createThemeContract } from '@vanilla-extract/css';

const colors = {
  text: null,
  reading: null,
  background: null,
  primary: {
    default: null,
    hovered: null,
    pressed: null,
  },
  // secondary: null,
  muted: null,
  highlight: null,

  success: null,
  message: null,
  warning: null,
  danger: null,
};

const gradients = {
  // subtle: null,
  // purple: null,
  blue: {
    default: null,
    hover: null,
  },
};

export const colorTokens = createThemeContract({
  colors,
  gradients,
});
