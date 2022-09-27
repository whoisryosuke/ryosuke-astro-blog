export const ANIMATION = {
  default: "400ms ease-in",
  fast: "300ms ease-in",
};

export const BREAKPOINTS = {
  mobile: "320px",
  tablet: "600px",
  computer: "992px",
  desktop: "1200px",
  widescreen: "1920px",
};
type MediaQueries = Record<keyof typeof BREAKPOINTS, Record<string, string>>;
// Generates media queries formatted for Vanilla Extract
export const MEDIA_QUERIES: MediaQueries = Object.entries(BREAKPOINTS).reduce(
  (mergeObj, [key, value]) => ({
    ...mergeObj,
    [key]: { "@media": `screen and (min-width: ${value})` },
  }),
  {} as MediaQueries
);

export const FONTS = {
  body: `'Libre Franklin', Helvetiva Neue, Helvetica, Arial, sans-serif`,
  heading: `'Days One', Montserrat, Helvetica, Arial, sans-serif`,
  monospace: "Menlo, monospace",
};

export const FONT_WEIGHTS = {
  regular: 500,
  bold: 700,
};

export const FONT_SIZE_PROPERTIES = {
  0: "12px",
  1: "14px",
  2: "16px",
  3: "20px",
  4: "24px",
  5: "32px",
  6: "48px",
  7: "64px",
  8: "96px",
};

// export const SPACE = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const SPACE_PROPERTIES = {
  0: "2px",
  1: "4px",
  2: "8px",
  3: "16px",
  4: "24px",
  5: "32px",
  6: "48px",
  7: "64px",
  8: "96px",
  9: "128px",
  10: "192px",
  11: "256px",
  12: "512px",
};

export const COLUMN_PROPERTIES = {
  0: "256px",
  1: "288px",
  2: "320px",
  3: "384px",
  4: "448px",
  5: "512px",
  6: "576px",
  7: "672px",
  8: "768px",
  9: "896px",
  10: "1024px",
  11: "1152px",
  12: "1280px",
};
