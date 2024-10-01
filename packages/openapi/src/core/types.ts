import type { StrapiCore as Strapi } from ".";

export interface StrapiOptions {
  baseUrl: string;
  path: string;
  token?: string;
  fetch?: any;
}

export type Constructor<T> = new (...args: any[]) => T;

type AnyFunction = (...args: any) => any;

export type StrapiPlugin = (
  strapi: Strapi,
  options: StrapiOptions,
) => { [key: string]: any } | void;

export type ReturnTypeOf<T extends AnyFunction | AnyFunction[]> =
  T extends AnyFunction
    ? ReturnType<T>
    : T extends AnyFunction[]
      ? // exclude `void` from intersection, see octokit/octokit.js#2115
        UnionToIntersection<Exclude<ReturnType<T[number]>, void>>
      : never;
/**
 * @author https://stackoverflow.com/users/2887218/jcalz
 * @see https://stackoverflow.com/a/50375286/10325032
 */
export type UnionToIntersection<Union> = (
  Union extends any ? (argument: Union) => void : never
) extends (argument: infer Intersection) => void // tslint:disable-line: no-unused
  ? Intersection
  : never;

export type SearchParams = {
  page: number;
  maxPerPage: number;
  filters: {
    [key: string]: string | number;
  };
};

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
