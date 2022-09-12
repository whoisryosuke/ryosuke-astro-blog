import { linkStyles } from './Link.css';
import clsx from 'clsx';
import { DetailedHTMLProps, LinkHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface LinkProps extends Omit<DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'size'> {
  children: React.ReactNode;
}

export function Link({ children, ...props }: LinkProps) {
  return (
    <a className={clsx(linkStyles)} {...props}>
      {children}
    </a>
  );
}

export default Link;
