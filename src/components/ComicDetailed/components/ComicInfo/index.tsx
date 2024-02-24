import { type ReactNode } from 'react';
import Image from 'next/image';
import { getComicById } from '~/services';

type ComicInfoProps = {
  comicId: string;
};

const ListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-2">{children}</li>
);

const ListItemLabel = ({ children }: { children: ReactNode }) => (
  <strong>{children}</strong>
);

const ListItemValue = ({ children }: { children: ReactNode }) => (
  <p>{children}</p>
);

const ComicInfo = async ({ comicId }: ComicInfoProps) => {
  const {
    data: {
      results: [comic],
    },
  } = await getComicById(comicId);

  return (
    <div className="flex justify-center gap-8 p-12">
      <span className="relative aspect-square h-full w-4/12 overflow-hidden rounded-md shadow-lg">
        <Image
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title ?? comicId}
          fill
        />
      </span>
      <div className="flex w-6/12 flex-col justify-center gap-2">
        <h2 className="text-4xl font-bold">{comic.title}</h2>
        <p>{comic.description}</p>

        <ul>
          <ListItem>
            <ListItemLabel>Id: </ListItemLabel>
            <ListItemValue>{comic.id}</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemLabel>Digital Id: </ListItemLabel>
            <ListItemValue>{comic.digitalId}</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemLabel>Format: </ListItemLabel>
            <ListItemValue>{comic.format}</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemLabel>Pages: </ListItemLabel>
            <ListItemValue>{comic.pageCount}</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemLabel>ISBN: </ListItemLabel>
            <ListItemValue>{comic.isbn || 'N/A'}</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemLabel>UPC: </ListItemLabel>
            <ListItemValue>{comic.upc || 'N/A'}</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemLabel>EAN: </ListItemLabel>
            <ListItemValue>{comic.ean || 'N/A'}</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemLabel>ISSN: </ListItemLabel>
            <ListItemValue>{comic.issn || 'N/A'}</ListItemValue>
          </ListItem>
        </ul>
      </div>
    </div>
  );
};

export { ComicInfo };
