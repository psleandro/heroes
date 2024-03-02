import Image from 'next/image';
import { getEventById } from '~/services';

type EventInfoProps = {
  eventId: string;
};

const EventInfo = async ({ eventId }: EventInfoProps) => {
  const event = await getEventById(eventId);

  return (
    <div className="flex justify-center gap-8 p-12">
      <span className="relative aspect-square h-full w-4/12 overflow-hidden rounded-md shadow-lg">
        <Image
          src={`${event.thumbnail?.path}.${event.thumbnail?.extension}`}
          alt={event.title ?? eventId}
          fill
        />
      </span>
      <div className="flex w-6/12 flex-col justify-center gap-2">
        <h2 className="text-4xl font-bold">{event.title}</h2>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export { EventInfo };
