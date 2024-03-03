'use client';
import { HTMLProps, forwardRef } from 'react';
import Link, { type LinkProps } from 'next/link';
import { useSectionList } from '../contexts/SectionListProvider';
import type { MarvelApiEntityType } from '~/types';

type SectionListCarouselItemLinkProps = HTMLProps<HTMLAnchorElement> &
  Omit<LinkProps, 'href'> & {
    itemId: number | undefined;
  };

const listLinkByEntityType: {
  [k in MarvelApiEntityType]: string;
} = {
  creator: 'creators',
  character: 'characters',
  comic: 'comics',
  event: 'events',
  serie: 'series',
  story: 'stories',
};

const SectionListCarouselItemLink = forwardRef<
  HTMLAnchorElement,
  SectionListCarouselItemLinkProps
>(({ itemId, children, ...props }, ref) => {
  const { type } = useSectionList();

  return (
    <Link
      href={`/${listLinkByEntityType[type]}/${itemId}`}
      {...props}
      ref={ref}
    >
      {children}
    </Link>
  );
});

export { SectionListCarouselItemLink };
