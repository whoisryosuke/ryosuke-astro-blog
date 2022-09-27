import { styleVariants } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const variantVariant = styleVariants({
  ghost: {
    backgroundColor: "none",
  },
  outline: {
    backgroundColor: "none",
    borderWidth: "1px",
    borderColor: themes.tokens.colors.primary.default,
    borderRadius: base.tokens.space[1],
  },
});
