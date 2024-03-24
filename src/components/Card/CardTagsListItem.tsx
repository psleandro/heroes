'use client';
import Link from 'next/link';
import { MarvelApiEntityType } from '~/types';
import { bgColorByEntityType } from '~/utils';
import { useCardTagsList } from './CardTagsListContext';

type CardTagsListItemProps = {
  type: MarvelApiEntityType;
  quantity: number | undefined;
};

const getTagTextByType = (type: MarvelApiEntityType, quantity: number) => {
  if (quantity < 2) return type;
  return type === 'story' ? 'stories' : `${type}s`;
};

const CardTagsListItem = ({ type, quantity = 0 }: CardTagsListItemProps) => {
  const { getUrlToListByTagType } = useCardTagsList();

  return (
    !!quantity && (
      <li>
        <Link
          href={getUrlToListByTagType(type)}
          className={`flex gap-1 rounded-md ${bgColorByEntityType[type]} px-2 py-1 text-xs text-white transition-all hover:scale-110`}
        >
          <span>{quantity}</span>
          <span className="capitalize">{getTagTextByType(type, quantity)}</span>
        </Link>
      </li>
    )
  );
};

export { CardTagsListItem };
