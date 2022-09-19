import { style } from '@vanilla-extract/css';
import { themes, base } from '../../theme';
import { MEDIA_QUERIES } from "../../theme/tokens"

export const logoContainerStyles = style({
    position:'absolute',
    top:126,
    right: -30,
    zIndex: 710,
    // "Reverse" text and rotate
    transform: 'scaleX(-1) rotate(-90deg)',

    '@media': {
        [MEDIA_QUERIES.mobile['@media']]: {
            top:250,
        },
        [MEDIA_QUERIES.tablet['@media']]: {
            top:126,
        }
    }
});

export const logoTextStyles = style({
    textTransform: 'uppercase',
    margin:0,
    padding:0,
});
