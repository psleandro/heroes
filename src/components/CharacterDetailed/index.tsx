import { CharacterInfo } from './components';

type CharacterDetailedProps = {
  characterId: string;
};

const CharacterDetailed = async ({ characterId }: CharacterDetailedProps) => {
  return <CharacterInfo characterId={characterId} />;
};

export { CharacterDetailed };
