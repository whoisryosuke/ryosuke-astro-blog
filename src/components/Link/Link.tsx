import { linkInlineStyles, linkStyles, linkUnderlineStyles } from './Link.css';
import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';
import Text, { TextProps } from "../Text/Text"
import { Box } from '../Box/Box';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & TextProps<'a'> & {
  children: React.ReactNode;
  textClass?: string;
  ghost: boolean;
}

export function Link({ children, className,textClass, fontFamily, fontSize, fontWeight, ghost, ...props }: LinkProps) {
  const ghostStyles = ghost && linkInlineStyles
  return (
      <a className={clsx(linkStyles, className, ghostStyles)} {...props}>
        <Text as="span" className={textClass} style={{marginBottom: 0}} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight}>{children}</Text>
      </a>
  );
}

export default Link;
