import { type HTMLAttributes } from 'react';
import { SectionListCarousel } from './components/SectionListCarousel';
import { SectionListHeader } from './components/SectionListHeader';
import { SectionListHeaderLink } from './components/SectionListHeaderLink';
import { SectionListHeaderTitle } from './components/SectionListHeaderTitle';
import { SectionListProvider } from './contexts/SectionListProvider';
import { cn } from '~/lib/utils';
import { MarvelApiEntityType } from '~/types';
import { beforeBgColorByEntityType } from '~/utils';

type SectionListProps = HTMLAttributes<HTMLDivElement> & {
  type?: MarvelApiEntityType;
};

const SectionList = async ({
  className,
  type = 'character',
  children,
  ...props
}: SectionListProps) => (
  <SectionListProvider type={type}>
    <section
      className={cn(
        `relative mt-8 flex flex-col justify-center gap-8 p-12 before:absolute before:left-0 before:h-full before:w-full before:-skew-y-2`,
        beforeBgColorByEntityType[type],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  </SectionListProvider>
);

SectionList.displayName = 'SectionList';

SectionList.Carousel = SectionListCarousel;
SectionList.Header = SectionListHeader;
SectionList.Title = SectionListHeaderTitle;
SectionList.Link = SectionListHeaderLink;

export { SectionList };
