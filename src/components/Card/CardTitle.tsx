import Link, { type LinkProps } from 'next/link';
import { type HTMLAttributes } from 'react';

type CardTitleProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  href: LinkProps['href'];
};

const CardTitle = ({ href, children }: CardTitleProps) => (
  <Link href={href ?? '#'}>
    <strong className="text-lg">{children}</strong>
  </Link>
);

export { CardTitle };
