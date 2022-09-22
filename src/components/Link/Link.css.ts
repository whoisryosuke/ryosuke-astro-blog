import { style } from '@vanilla-extract/css';
import { themes, base } from '../../theme';

export const linkStyles = style({
  display: 'inline-block',
  color: themes.tokens.colors.text,
  marginBottom: base.tokens.space[2],
  // borderBottom: '3px solid',
  // borderColor: themes.tokens.colors.primary.default,
  textDecoration: 'none',
  paddingBottom: base.tokens.space[2],

  ":hover": {
    
  },
});

export const linkUnderlineStyles = style({
  width: '100%',
  height: '3px',
    background: themes.tokens.gradients.blue.default,
  textDecoration: 'none',
  marginTop: base.tokens.space[2],
  transition: 'background 400ms linear, transform 400ms linear',

  // ":hover": {
  //   background: themes.tokens.gradients.blue,
  // },

  selectors: {
    [`${linkStyles}:hover &`]: {
      background: themes.tokens.gradients.blue.hover,
      transform: "translateY(-2px)"
    }
  }
});
