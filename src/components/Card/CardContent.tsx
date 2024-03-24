import { type HTMLAttributes } from 'react';
import { cn } from '~/lib/utils';

type CardContentProps = HTMLAttributes<HTMLSpanElement>;

const CardContent = ({ children, ...props }: CardContentProps) => (
  <span
    className={cn(
      'relative bottom-0 left-0 z-10 flex w-full flex-1 flex-col justify-between gap-3 overflow-hidden border-t-4 border-red-500 bg-slate-800 px-4 py-3 text-white transition-all',
      'before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:-translate-y-full before:bg-slate-900 before:transition-all',
      'group-hover:before:translate-y-0',
      props.className,
    )}
    {...props}
  >
    {children}
  </span>
);

export { CardContent };
