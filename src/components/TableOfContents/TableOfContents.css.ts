import { MEDIA_QUERIES } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const tocContainerStyles = style({
  display:"inline-block",
  minWidth: "40%",
  backgroundColor: themes.tokens.colors.glass,
  borderRadius: base.tokens.space[3],
  padding: base.tokens.space[3],
  paddingLeft: base.tokens.space[4],
  paddingRight: base.tokens.space[4],

  
  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      position:"relative",
    },
    [MEDIA_QUERIES.desktop["@media"]]: {
      position:"fixed",
      top:0,
      right:"-50%",
    },
  },
});
