import { SerieDetailed } from '~/components/EntityDetails';

type SeriePageProps = {
  params: { serieId: string };
};

export default async function SeriePage({ params }: SeriePageProps) {
  return (
    <div>
      <SerieDetailed serieId={params.serieId} />
    </div>
  );
}
