import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import { Comic, DataWrapper, Event, Serie, Story } from '~/types';

type ApparitionCarouselProps<T extends Comic | Event | Serie | Story> = {
  fetchFn: () => Promise<DataWrapper<T>>;
};

const ApparitionCarousel = async <T extends Comic | Event | Serie | Story>({
  fetchFn,
}: ApparitionCarouselProps<T>) => {
  const { data } = await fetchFn();

  return (
    <div className="relative px-12">
      <Carousel opts={{ align: 'start' }} className="w-full">
        <CarouselContent>
          {data.results.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex flex-col gap-2 rounded-sm md:basis-1/2 lg:basis-[10%]"
            >
              <span className="relative min-h-48 flex-1 shadow-md">
                <Image
                  fill
                  src={
                    item.thumbnail
                      ? `${item.thumbnail?.path}.${item.thumbnail?.extension}`
                      : '/imgs/no-image.png'
                  }
                  alt={item.title ?? ''}
                  className="rounded-sm object-cover"
                />
              </span>

              <p
                className="h-10 text-ellipsis text-sm text-gray-900"
                title={item.title}
              >
                {item.title}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

ApparitionCarousel.displayName = 'ApparitionCarousel';

export { ApparitionCarousel };
