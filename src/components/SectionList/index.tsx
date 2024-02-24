import { type HTMLAttributes } from 'react';
import { SectionListCarousel } from './components/SectionListCarousel';
import { SectionListHeader } from './components/SectionListHeader';
import { SectionListHeaderLink } from './components/SectionListHeaderLink';
import { SectionListHeaderTitle } from './components/SectionListHeaderTitle';
import { cn } from '~/lib/utils';

type SectionListProps = HTMLAttributes<HTMLDivElement>;

const SectionList = async ({
  className,
  children,
  ...props
}: SectionListProps) => (
  <section
    className={cn(
      'relative mt-8 flex flex-col justify-center gap-8 p-12 before:absolute before:left-0 before:h-full before:w-full before:-skew-y-2',
      className,
    )}
    {...props}
  >
    {children}
  </section>
);

SectionList.displayName = 'SectionList';

SectionList.Carousel = SectionListCarousel;
SectionList.Header = SectionListHeader;
SectionList.Title = SectionListHeaderTitle;
SectionList.Link = SectionListHeaderLink;

export { SectionList };
