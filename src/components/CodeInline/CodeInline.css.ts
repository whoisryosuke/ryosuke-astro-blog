import { base } from '@/theme/base.css';
import { themes } from '@/theme/index';
import { style } from '@vanilla-extract/css';

export const codeInlineStyles = style({

    selectors: {
        'p > &': {
            display: 'inline-block',
            marginLeft: base.tokens.space[1],
            marginRight: base.tokens.space[1],
            color: themes.tokens.colors.background,
            paddingLeft: base.tokens.space[2],
            paddingRight: base.tokens.space[2],
            paddingTop: base.tokens.space[0],
            paddingBottom: base.tokens.space[0],
            position:'relative',
        },
        'p > &:after': {
            content: '',
            width: '100%',
            height: '80%',
            display: 'inline-block',
            position:'absolute',
            left:'0',
            top:'10%',

            background: themes.tokens.gradients.blue.default,
            zIndex:-1,
            opacity: 0.6,
        },
        'p > &:hover:after': {
            opacity: 1,
        },
    }

    
})