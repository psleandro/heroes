import { MarvelApiEntityType } from '~/types';
import { bgColorByEntityType } from '~/utils';

type ApparitionsTagProps = {
  type: MarvelApiEntityType;
  quantity: number | undefined;
};

const getApparitionTextByType = (
  type: MarvelApiEntityType,
  quantity: number,
) => {
  if (quantity < 2) return type;
  return type === 'story' ? 'stories' : `${type}s`;
};

const ApparitionsTag = ({ type, quantity = 0 }: ApparitionsTagProps) =>
  !!quantity && (
    <>
      <li
        className={`flex gap-1 rounded-md ${bgColorByEntityType[type]} bg bg- px-2 py-1 text-xs text-white`}
      >
        <span>{quantity}</span>
        <span className="capitalize">
          {getApparitionTextByType(type, quantity)}
        </span>
      </li>
    </>
  );

export { ApparitionsTag };
