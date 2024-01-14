type ApparitionsTagType = 'comic' | 'event' | 'serie' | 'story';

type ApparitionsTagProps = {
  type: ApparitionsTagType;
  quantity: number | undefined;
};

const apparitionBgColorByType = {
  comic: 'bg-red-400',
  event: 'bg-orange-400',
  serie: 'bg-blue-400',
  story: 'bg-green-400',
};

const getApparitionTextByType = (
  type: ApparitionsTagType,
  quantity: number,
) => {
  if (quantity < 2) return type;
  return type === 'story' ? 'stories' : `${type}s`;
};

const ApparitionsTag = ({ type, quantity = 0 }: ApparitionsTagProps) =>
  !!quantity && (
    <>
      <li
        className={`flex gap-1 rounded-md ${apparitionBgColorByType[type]} px-2 py-1 text-xs text-white`}
      >
        <span>{quantity}</span>
        <span className="capitalize">
          {getApparitionTextByType(type, quantity)}
        </span>
      </li>
    </>
  );

export { ApparitionsTag };
