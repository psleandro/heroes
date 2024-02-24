import { MarvelApiEntityType } from '~/types';
import { bgColorByEntityType } from '~/utils';

type CardTagsListItemProps = {
  type: MarvelApiEntityType;
  quantity: number | undefined;
};

const getTagTextByType = (type: MarvelApiEntityType, quantity: number) => {
  if (quantity < 2) return type;
  return type === 'story' ? 'stories' : `${type}s`;
};

const CardTagsListItem = ({ type, quantity = 0 }: CardTagsListItemProps) =>
  !!quantity && (
    <>
      <li
        className={`flex gap-1 rounded-md ${bgColorByEntityType[type]} bg bg- px-2 py-1 text-xs text-white`}
      >
        <span>{quantity}</span>
        <span className="capitalize">{getTagTextByType(type, quantity)}</span>
      </li>
    </>
  );

export { CardTagsListItem };
