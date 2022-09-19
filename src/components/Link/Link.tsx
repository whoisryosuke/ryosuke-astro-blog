import { linkStyles } from './Link.css';
import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';
import Text from "../Text/Text"

/* eslint-disable-next-line */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  textClass?: string;
}

export function Link({ children, className,textClass,...props }: LinkProps) {
  return (
    <a className={clsx(linkStyles, className)} {...props}>
      <Text className={textClass} style={{marginBottom: 0}}>{children}</Text>
    </a>
  );
}

export default Link;
