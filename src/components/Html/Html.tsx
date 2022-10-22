import React, { PropsWithChildren } from "react";
import Fonts from "../Fonts/Fonts";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import "normalize.css";
import { MainNavProvider } from "src/context/MainNavContext";
import { bodyStyles } from "./Html.css";
import MetaTags, { MetaTagsProps } from "../MetaTags/MetaTags";

type Props = {
  // Title of page (passed to `<head>`)
  title: string;

  meta: MetaTagsProps;
};

const Html = ({ title, meta, children }: PropsWithChildren<Props>) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>

        {/* Social Media Stuff */}
        <MetaTags {...meta} />

        <Fonts />
        <script src="/sw.js" />
      </head>
      <body className={bodyStyles}>{children}</body>
    </html>
  );
};

export default Html;
