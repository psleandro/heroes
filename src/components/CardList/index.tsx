import { type HTMLAttributes } from 'react';
import { CardListSkeleton } from './CardListSkeleton';

type CardListProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const CardList = ({ children, ...props }: CardListProps) => (
  <ul
    className="flex flex-wrap justify-center gap-8 gap-y-16 md:justify-start"
    {...props}
  >
    {children}
  </ul>
);

CardList.Skeleton = CardListSkeleton;

export { CardList };
