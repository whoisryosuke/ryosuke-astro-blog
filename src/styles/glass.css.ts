import { base } from "@/theme/base.css";
import { style } from "@vanilla-extract/css";
import { themes } from "../theme";

export const glassStyles = style({
  backgroundColor: themes.tokens.colors.glass,
  backdropFilter: "blur(8px)",
  borderRadius: base.tokens.space[5],
});

export const glassFadeStyle = style({
  // Mask the bottom of the canvas with a gradient
  background: `linear-gradient(to bottom, transparent 25%, ${themes.tokens.colors.glass} 50%, transparent 25%)`,
});
