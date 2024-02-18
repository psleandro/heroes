import { type HTMLAttributes } from 'react';
import { ApparitionCarousel } from './components/ApparitionCarousel';
import { ApparitionHeader } from './components/ApparitionHeader';
import { ApparitionHeaderLink } from './components/ApparitionHeaderLink';
import { ApparitionHeaderTitle } from './components/ApparitionHeaderTitle';
import { cn } from '~/lib/utils';

type CharacterApparitionProps = HTMLAttributes<HTMLDivElement>;

const CharacterApparition = async ({
  className,
  children,
  ...props
}: CharacterApparitionProps) => (
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

CharacterApparition.displayName = 'CharacterApparition';

CharacterApparition.Carousel = ApparitionCarousel;
CharacterApparition.Header = ApparitionHeader;
CharacterApparition.Title = ApparitionHeaderTitle;
CharacterApparition.Link = ApparitionHeaderLink;

export { CharacterApparition };
