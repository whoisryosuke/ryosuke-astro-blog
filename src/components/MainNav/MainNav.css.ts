import { style } from '@vanilla-extract/css';
import { themes, base } from '../../theme';

export const navLayoutStyle = style({
    width: '100%',
    position:'absolute',
    top:40,
    left: 'auto',
    zIndex: 710,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
});

export const navContainerStyle = style({

    padding: '15px 80px',
  
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(6px)',
    borderRadius: '36px',  
});

export const navListStyle = style({
    margin:0,
    padding:0,
});

export const navItemStyle = style({
    textTransform: 'uppercase',
    border:0,
    textDecoration: 'none',
    color: themes.tokens.colors.text,
});