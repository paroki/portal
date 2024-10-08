/* eslint-disable @next/next/no-img-element */
import { addPrefix } from '@/utils/prefix';
import type { Image } from '@pkrbt/openapi';

type Props = {
  image: Image;
  size: 'thumbnail' | 'medium' | 'small' | 'large';
};
export default function Image({ image, size }: Props) {
  const { url, width, height } = image.formats[size];

  return (
    <img src={addPrefix(String(url))} alt={image.alternativeText} width={width} height={height} className="rounded" />
  );
}
