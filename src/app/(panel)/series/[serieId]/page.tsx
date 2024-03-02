import { SerieDetailed } from '~/components/SerieDetailed';

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
