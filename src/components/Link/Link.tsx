import { linkColorPrimaryStyles, linkInlineStyles, linkStyles, linkUnderlineStyles } from './Link.css';
import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';
import Text, { TextProps } from "../Text/Text"
import { Box } from '../Box/Box';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & TextProps<'a'> & {
  children: React.ReactNode;
  textClass?: string;
  ghost?: boolean;
  color?: 'primary';
}

export function Link({ children, className,textClass, fontFamily, fontSize, fontWeight, lineHeight, ghost = false, color, ...props }: LinkProps) {
  const ghostStyles = ghost && linkInlineStyles
  const colorStyles = color === 'primary' && linkColorPrimaryStyles
  return (
      <a className={clsx(linkStyles, className, ghostStyles)} {...props}>
        <Text as="span" className={clsx(textClass,colorStyles)} style={{marginBottom: 0}} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight}>{children}</Text>
      </a>
  );
}

export default Link;
