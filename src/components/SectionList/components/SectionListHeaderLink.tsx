import Link, { type LinkProps } from 'next/link';
import { HtmlHTMLAttributes } from 'react';
import { cn } from '~/lib/utils';

type SectionListHeaderLinkProps = HtmlHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

const SectionListHeaderLink = async ({
  className,
  ...props
}: SectionListHeaderLinkProps) => (
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

SectionListHeaderLink.displayName = 'SectionListHeaderLink';

export { SectionListHeaderLink };
