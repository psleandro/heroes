'use client';

import Link, { type LinkProps } from 'next/link';
import { HtmlHTMLAttributes } from 'react';
import { useSectionList } from '../contexts/SectionListProvider';
import { cn } from '~/lib/utils';
import { getUrlToListByTagType } from '~/utils/url';
import type { ListParametersNames } from '~/types';

type SectionListHeaderViewAllLinkProps = HtmlHTMLAttributes<HTMLAnchorElement> &
  Omit<LinkProps, 'href'> & {
    from: ListParametersNames;
    entityId: string | number | undefined;
  };

const SectionListHeaderViewAllLink = async ({
  className,
  from,
  entityId,
  ...props
}: SectionListHeaderViewAllLinkProps) => {
  const { type } = useSectionList();

  return (
    <Link
      className={cn(
        'font-medium text-white transition-all hover:underline',
        className,
      )}
      {...props}
      href={getUrlToListByTagType(type, from, entityId)}
    >
      View All
    </Link>
  );
};

SectionListHeaderViewAllLink.displayName = 'SectionListHeaderViewAllLink';

export { SectionListHeaderViewAllLink };
