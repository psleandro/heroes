import Link, { type LinkProps } from 'next/link';
import { HtmlHTMLAttributes } from 'react';
import { cn } from '~/lib/utils';

type ApparitionHeaderLinkProps = HtmlHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

const ApparitionHeaderLink = async ({
  className,
  ...props
}: ApparitionHeaderLinkProps) => (
  <Link
    className={cn(
      'font-medium text-white transition-all hover:underline',
      className,
    )}
    {...props}
  >
    View All
  </Link>
);

ApparitionHeaderLink.displayName = 'ApparitionHeaderLink';

export { ApparitionHeaderLink };
