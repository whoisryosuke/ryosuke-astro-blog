import clsx from "clsx";
import React, { AnchorHTMLAttributes } from "react";
import { imageStyles } from "./Image.css";

export type ImageProps = AnchorHTMLAttributes<HTMLImageElement> & {
  children: React.ReactNode;
};

const Image = ({ className, ...props }: ImageProps) => {
  return <img className={clsx(imageStyles, className)} {...props} />;
};

export default Image;
