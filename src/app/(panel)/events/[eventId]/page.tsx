import { EventDetailed } from '~/components/EntityDetails';

type EventPageProps = {
  params: { eventId: string };
};

export default async function EventPage({ params }: EventPageProps) {
  return (
    <div>
      <EventDetailed eventId={params.eventId} />
    </div>
  );
}
