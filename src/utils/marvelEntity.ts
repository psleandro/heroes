type MarvelEntityTitles = {
  title?: string;
  name?: string;
  fullName?: string;
};

const isCharacter = (item: MarvelEntityTitles) => !!item.name;
const isCreator = (item: MarvelEntityTitles) => !!item.fullName;

export const getEntityTitle = (item: MarvelEntityTitles) => {
  if (isCharacter(item)) return item.name ?? '';
  if (isCreator(item)) return item.fullName ?? '';

  return item.title ?? '';
};
