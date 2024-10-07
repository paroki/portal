/* eslint-disable @next/next/no-img-element */
import { STRAPI_URL } from '@/utils/strapi';
import type { Image } from '@pkrbt/openapi';

type Props = {
  image: Image;
  size: 'thumbnail' | 'medium' | 'small' | 'large';
};
export default function Image({ image, size }: Props) {
  const { url, width, height } = image.formats[size];

  return <img src={STRAPI_URL + url} alt={image.alternativeText} width={width} height={height} className="rounded" />;
}
