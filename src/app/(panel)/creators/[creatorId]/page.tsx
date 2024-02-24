import { CreatorDetailed } from '~/components/CreatorDetailed';

type CreatorPageProps = {
  params: { creatorId: string };
};

export default async function CreatorPage({ params }: CreatorPageProps) {
  return (
    <div>
      <CreatorDetailed creatorId={params.creatorId} />
    </div>
  );
}
