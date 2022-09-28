import { ThemeContext, ThemeNames } from "../../context/theme";
import { useState } from "react";
import { themes, base } from "../../theme";
import useStore from "src/store";

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const {theme} = useStore()

  const colorMode = theme === "light" ? themes.light : themes.dark;
  return (
    <div className={`appRoot ${base.class} ${colorMode}`}>{children}</div>
  );
}

export default ThemeProvider;
