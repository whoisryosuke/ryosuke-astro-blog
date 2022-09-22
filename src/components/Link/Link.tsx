import { linkStyles, linkUnderlineStyles } from './Link.css';
import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';
import Text, { TextProps } from "../Text/Text"
import { Box } from '../Box/Box';

/* eslint-disable-next-line */
export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & TextProps<'a'> & {
  children: React.ReactNode;
  textClass?: string;
}

export function Link({ children, className,textClass, fontFamily, fontSize, fontWeight,...props }: LinkProps) {
  return (
    <a className={clsx(linkStyles, className)} {...props}>
      <Text className={textClass} style={{marginBottom: 0}} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight}>{children}</Text>
      <Box className={linkUnderlineStyles} />
    </a>
  );
}

export default Link;
