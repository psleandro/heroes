import { CharacterDetailed } from '~/components/CharacterDetailed';

type CharacterPageProps = {
  params: { characterId: string };
};

export default async function CharacterPage({ params }: CharacterPageProps) {
  return (
    <div>
      <CharacterDetailed characterId={params.characterId} />
    </div>
  );
}
