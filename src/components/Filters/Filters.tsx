import { HTMLProps } from 'react';
import { cn } from '~/lib/utils';

type FiltersProps = HTMLProps<HTMLDivElement>;

const Filters = ({ children, ...props }: FiltersProps) => (
  <div
    {...props}
    className={cn(
      'flex flex-col flex-wrap items-stretch gap-4 md:flex-row',
      props.className,
    )}
  >
    {children}
  </div>
);

export { Filters };
