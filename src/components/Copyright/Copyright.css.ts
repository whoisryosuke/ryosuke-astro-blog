import { style } from '@vanilla-extract/css';
import { themes, base } from '../../theme';

export const copyrightStyles = style({
  color: themes.tokens.colors.muted,
  letterSpacing: '2px',
  fontSize: '13px',
  textAlign:'right'
});
