import { createThemeContract } from '@vanilla-extract/css';

const colors = {
  text: '',
  reading: '',
  background: '',
  primary: {
    default: '',
    hovered: '',
    pressed: '',
  },
  // secondary: '',
  muted: '',
  highlight: '',

  success: '',
  message: '',
  warning: '',
  danger: '',
};

const gradients = {
  // subtle: '',
  // purple: '',
  blue: {
    default: '',
    hover: '',
  },
  text: {
    blue: {
      default: '',
      hover: '',
    },
    text: {
      default: '',
      hover: '',
    }
  }
};

export const colorTokens = createThemeContract({
  colors,
  gradients,
});
