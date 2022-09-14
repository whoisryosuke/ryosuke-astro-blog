import { style } from '@vanilla-extract/css';
import { themes, base } from '../../theme';

export const linkStyles = style({
  display: 'inline-block',
  color: themes.tokens.colors.text,
  marginBottom: base.tokens.space[2],
  borderBottom: '3px solid',
  borderColor: themes.tokens.colors.primary.default,
  textDecoration: 'none',
  paddingBottom: base.tokens.space[2],
});
