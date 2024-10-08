export function addPrefix(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!prefix) {
    throw new Error('NEXT_PUBLIC_STRAPI_URL is not provided');
  }

  return path.includes(prefix) ? path : `${prefix}${path}`;
}
