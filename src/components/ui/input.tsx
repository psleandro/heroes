import * as React from 'react';

import { cn } from '~/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  rootProps?: React.HTMLAttributes<HTMLDivElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, rootProps, ...props }, ref) => (
    <div
      {...rootProps}
      className={cn(
        'relative flex h-10 items-center rounded-md border border-input bg-white text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 ',
        rootProps?.className,
      )}
    >
      {!!startIcon && (
        <span className="pointer-events-none absolute left-2">{startIcon}</span>
      )}
      <input
        type={type}
        className={cn(
          'w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          startIcon && 'pl-10',
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  ),
);
Input.displayName = 'Input';

export { Input };
