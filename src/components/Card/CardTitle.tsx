import { type HTMLAttributes } from 'react';

type CardTitleProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const CardTitle = ({ children }: CardTitleProps) => (
  <strong className="text-lg">{children}</strong>
);

export { CardTitle };
