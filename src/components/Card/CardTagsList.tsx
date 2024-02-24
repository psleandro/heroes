import { type HTMLAttributes } from 'react';

type CardTagsListProps = HTMLAttributes<HTMLUListElement> & {
  children: React.ReactNode;
};

const CardTagsList = ({ children, ...props }: CardTagsListProps) => (
  <ul className="-mt-1 flex flex-wrap gap-1" {...props}>
    {children}
  </ul>
);

export { CardTagsList };
