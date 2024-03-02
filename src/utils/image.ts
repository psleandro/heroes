import type { ImageData } from '~/types';

export const getImageUrl = (imageData: ImageData | undefined | null) =>
  imageData?.path && imageData?.extension
    ? `${imageData.path}.${imageData.extension}`
    : '/imgs/no-image.png';
