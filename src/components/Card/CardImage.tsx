import Image, { type ImageProps } from 'next/image';
import Link, { type LinkProps } from 'next/link';

type CardImageProps = ImageProps & {
  linkProps?: LinkProps;
};

const CardImage = ({ linkProps, ...props }: CardImageProps) => (
  <Link
    className="relative aspect-square overflow-hidden object-cover shadow-lg group-hover:cursor-pointer"
    {...linkProps}
    href={linkProps?.href ?? '#'}
  >
    <Image
      className="transition-all duration-500 group-hover:scale-110"
      fill
      {...props}
      alt={props.alt}
    />
  </Link>
);

export { CardImage };
