import Image from 'next/image';
import { getCharacterById } from '~/services';

type CharacterInfoProps = {
  characterId: string;
};

const CharacterInfo = async ({ characterId }: CharacterInfoProps) => {
  const {
    data: {
      results: [character],
    },
  } = await getCharacterById(characterId);

  return (
    <div className="flex justify-center gap-8 p-12">
      <span className="relative aspect-square h-full w-4/12 overflow-hidden rounded-md shadow-lg">
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
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
