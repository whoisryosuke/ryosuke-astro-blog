import React, { PropsWithChildren } from "react";
import Fonts from "../Fonts/Fonts";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import "normalize.css";
import { MainNavProvider } from "src/context/MainNavContext";
import { bodyStyles } from "./Html.css";

type Props = {
  // Title of page (passed to `<head>`)
  title: string;
};

const Html = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Fonts />
        <title>{title}</title>
      </head>
      <body className={bodyStyles}>{children}</body>
    </html>
  );
};

export default Html;
