import { type HTMLAttributes } from 'react';
import {
  CardTagsListProvider,
  type CardTagsListProviderProps,
} from './CardTagsListContext';

type CardTagsListProps = HTMLAttributes<HTMLUListElement> &
  CardTagsListProviderProps;

const CardTagsList = ({
  children,
  from,
  entityId,
  ...props
}: CardTagsListProps) => (
  <CardTagsListProvider from={from} entityId={entityId}>
    <ul className="-mt-1 flex flex-wrap gap-2" {...props}>
      {children}
    </ul>
  </CardTagsListProvider>
);

export { CardTagsList };
