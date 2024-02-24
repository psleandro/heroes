import Link from 'next/link';
import Image from 'next/image';
import { ApparitionsTag } from '~/components/ApparitionsTag';
import type { Comic } from '~/types';

type ComicCardProps = { comic: Comic };

const ComicCard = ({ comic }: ComicCardProps) => (
  <div className="flex flex-1 flex-col gap-3">
    <Link
      href={`/comics/${comic.id}`}
      className="relative aspect-square overflow-hidden rounded-md object-cover shadow-lg hover:cursor-pointer"
    >
      <Image
        className="object-cover transition-all duration-500 hover:scale-110"
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        fill
        alt={comic.title ?? ''}
      />
    </Link>
    <strong className="text-lg">{comic.title}</strong>
    <ul className="-mt-1 flex flex-wrap gap-1">
      <ApparitionsTag type="creator" quantity={comic.creators?.available} />
      <ApparitionsTag type="character" quantity={comic.characters?.available} />
      <ApparitionsTag type="story" quantity={comic.stories?.available} />
      <ApparitionsTag type="event" quantity={comic.events?.available} />
    </ul>
  </div>
);

export { ComicCard };
