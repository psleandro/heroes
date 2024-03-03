import { ComicDetailed } from '~/components/EntityDetails';

type ComicPageProps = {
  params: { comicId: string };
};

export default async function ComicPage({ params }: ComicPageProps) {
  return (
    <div>
      <ComicDetailed comicId={params.comicId} />
    </div>
  );
}
