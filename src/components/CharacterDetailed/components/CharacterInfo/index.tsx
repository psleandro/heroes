import Image from 'next/image';
import { getCharacterById } from '~/services';
import { getImageUrl } from '~/utils';

type CharacterInfoProps = {
  characterId: string;
};

const CharacterInfo = async ({ characterId }: CharacterInfoProps) => {
  const character = await getCharacterById(characterId);

  return (
    <div className="flex justify-center gap-8 p-12">
      <span className="relative aspect-square h-full w-4/12 overflow-hidden rounded-md shadow-lg">
        <Image
          src={getImageUrl(character.thumbnail)}
          alt={character.name}
          fill
        />
      </span>
      <div className="flex w-6/12 flex-col justify-center gap-2">
        <h2 className="text-4xl font-bold">{character.name}</h2>
        <p>{character.description}</p>
      </div>
    </div>
  );
};

export { CharacterInfo };
