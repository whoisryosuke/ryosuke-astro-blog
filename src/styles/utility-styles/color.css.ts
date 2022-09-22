import { colorTokens } from '@/theme/colormode.css';
import { themes } from '@/theme/index';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      '@media': '(prefers-color-scheme: light)'
    },
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: false,
  properties: {
    // Neither work
    // color: colorTokens.colors,
    color: themes.tokens.colors,
  },
  shorthands: {},
});

export const colorUtilityStyles = createSprinkles(colorProperties);

// It's a good idea to export the Sprinkles type too
export type ColorUtilityStyles = Parameters<typeof colorUtilityStyles>[0];
