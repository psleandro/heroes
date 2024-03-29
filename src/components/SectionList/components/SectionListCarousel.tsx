import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import { SectionListCarouselItemLink } from './SectionListCarouselItemLink';
import { getImageUrl } from '~/utils';
import type { DataWrapper, MarvelApiEntity } from '~/types';
import { getEntityTitle } from '~/utils/marvelEntity';

type SectionListCarouselProps<T extends MarvelApiEntity> = {
  fetchFn: () => Promise<DataWrapper<T>>;
};

const getYear = (date: string | Date | undefined) => {
  const year = new Date(date ?? '').getFullYear();
  return isNaN(year) ? null : year;
};

const SectionListCarousel = async <T extends MarvelApiEntity>({
  fetchFn,
}: SectionListCarouselProps<T>) => {
  const { data } = await fetchFn();

  return (
    <div className="relative px-12">
      <Carousel opts={{ align: 'start' }} className="w-full">
        <CarouselContent>
          {data.results.map((item) => (
            <CarouselItem
              key={item.id}
              className="group aspect-[2/3] max-w-40  sm:max-w-none sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-[10%]"
            >
              <SectionListCarouselItemLink
                itemId={item.id}
                className="relative flex h-full flex-col gap-2 overflow-hidden rounded-sm"
              >
                <span className="relative min-h-48 flex-1 shadow-md">
                  <Image
                    fill
                    src={getImageUrl(item.thumbnail)}
                    alt={getEntityTitle(item)}
                    className="rounded-sm object-cover"
                  />
                </span>

                <div className="absolute bottom-0 flex h-auto w-full translate-y-full flex-col gap-1 self-stretch bg-zinc-800 p-2 transition-all duration-200 group-hover:translate-y-0">
                  {!!getYear(item.modified) && (
                    <span className="text-xs text-gray-300">
                      {getYear(item.modified)}
                    </span>
                  )}

                  <strong
                    className="line-clamp-3 text-xs text-white"
                    title={getEntityTitle(item)}
                  >
                    {getEntityTitle(item)}
                  </strong>
                </div>
              </SectionListCarouselItemLink>
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
