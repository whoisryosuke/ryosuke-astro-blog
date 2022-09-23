import { style } from '@vanilla-extract/css';
import { themes, base } from '../../theme';

export const copyrightStyles = style({
  color: themes.tokens.colors.muted,
  letterSpacing: '2px',
  fontSize: '13px',
  textAlign:'right',

  // position: 'absolute',
  // bottom: 0,
  // right:0,
});
