import { type HTMLAttributes } from 'react';
import { CardTitle } from './CardTitle';
import { CardTagsList } from './CardTagsList';
import { CardTagsListItem } from './CardTagsListItem';
import { CardImage } from './CardImage';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  element?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

const Card = ({ children, element: Element = 'span' }: CardProps) => (
  <Element className="flex min-w-36 flex-1 md:min-w-48 lg:min-w-60 xl:w-72 xl:max-w-72">
    <div className="flex flex-1 flex-col gap-3">{children}</div>
  </Element>
);

Card.Image = CardImage;
Card.Title = CardTitle;
Card.TagsList = CardTagsList;
Card.TagsListItem = CardTagsListItem;

export { Card };
