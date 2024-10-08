import { describe, expect, it } from 'vitest';
import { addPrefix } from '.';

describe('Add prefix', () => {
  it('should return add http prefix for unprefixed path', () => {
    expect(addPrefix('/upload')).toEqual(process.env.NEXT_PUBLIC_STRAPI_URL + '/upload');
  });

  it('should not adding prefix for prefixed path', () => {
    expect(addPrefix(process.env.NEXT_PUBLIC_STRAPI_URL + '/upload')).toEqual(
      process.env.NEXT_PUBLIC_STRAPI_URL + '/upload'
    );
  });
});
