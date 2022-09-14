import { linkStyles } from './Link.css';
import clsx from 'clsx';
import { DetailedHTMLProps, LinkHTMLAttributes } from 'react';
import Text from "../Text/Text"

/* eslint-disable-next-line */
export interface LinkProps extends Omit<DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'size'> {
  children: React.ReactNode;
}

export function Link({ children, ...props }: LinkProps) {
  return (
    <a className={clsx(linkStyles)} {...props}>
      <Text style={{marginBottom: 0}}>{children}</Text>
    </a>
  );
}

export default Link;
