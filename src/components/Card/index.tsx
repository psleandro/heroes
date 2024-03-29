import { type HTMLAttributes } from 'react';
import { CardContent } from './CardContent';
import { CardTitle } from './CardTitle';
import { CardTagsList } from './CardTagsList';
import { CardTagsListItem } from './CardTagsListItem';
import { CardImage } from './CardImage';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  element?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

const Card = ({ children, element: Element = 'span' }: CardProps) => (
  <Element className="group flex min-w-48 max-w-[360px] flex-1 overflow-hidden rounded-md shadow-md lg:min-w-60 xl:w-96 xl:min-w-80">
    <span className="relative flex flex-1 flex-col">{children}</span>
  </Element>
);

Card.Content = CardContent;
Card.Image = CardImage;
Card.Title = CardTitle;
Card.TagsList = CardTagsList;
Card.TagsListItem = CardTagsListItem;

export { Card };
