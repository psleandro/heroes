import Image from 'next/image';
import { ApparitionsTag } from './ApparitionsTag';
import type { Character } from '~/types';

type CharacterCardProps = Character;

const CharacterCard = ({
  name,
  thumbnail,
  comics,
  events,
  series,
  stories,
}: CharacterCardProps) => (
  <div className="flex flex-1 flex-col gap-3">
    <div className="relative aspect-square  overflow-hidden rounded-md object-cover shadow-lg hover:cursor-pointer">
      <Image
        className="transition-all duration-500 hover:scale-110"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        fill
        alt={name}
      />
    </div>
    <strong className="text-lg">{name}</strong>
    <ul className="-mt-1 flex flex-wrap gap-1">
      <ApparitionsTag type="comic" quantity={comics.available} />
      <ApparitionsTag type="story" quantity={stories.available} />
      <ApparitionsTag type="serie" quantity={series.available} />
      <ApparitionsTag type="event" quantity={events.available} />
    </ul>
  </div>
);

export { CharacterCard };
