import { getCharacters } from '~/services';
import { CharacterCard } from './components';

export default async function CharactersPage() {
  const result = await getCharacters();

  return (
    <div className="min-h-dvh bg-slate-100 p-16">
      <ul className="flex flex-wrap gap-8 gap-y-16">
        {result.data.results?.map((result) => (
          <li
            key={result.id}
            className="flex min-w-36 flex-1 md:min-w-48 lg:min-w-60 xl:w-72 xl:max-w-72"
          >
            <CharacterCard {...result} />
          </li>
        ))}
      </ul>
    </div>
  );
}
