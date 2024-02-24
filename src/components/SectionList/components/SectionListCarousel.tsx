import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import type { Comic, DataWrapper, MarvelApiEntity } from '~/types';

type SectionListCarouselProps<T extends MarvelApiEntity> = {
  fetchFn: () => Promise<DataWrapper<T>>;
  getTitle?: (item: T) => string;
};

const SectionListCarousel = async <T extends MarvelApiEntity>({
  fetchFn,
  getTitle = (item: T) => (item as Comic).title ?? '',
}: SectionListCarouselProps<T>) => {
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
                  alt={getTitle(item)}
                  className="rounded-sm object-cover"
                />
              </span>

              <p
                className="h-10 text-ellipsis text-sm text-gray-900"
                title={getTitle(item)}
              >
                {getTitle(item)}
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

SectionListCarousel.displayName = 'SectionListCarousel';

export { SectionListCarousel };
