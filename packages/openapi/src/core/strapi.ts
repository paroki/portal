import createClient, { type Client } from "openapi-fetch";
import type {
  Constructor,
  ReturnTypeOf,
  StrapiOptions,
  StrapiPlugin,
  UnionToIntersection,
} from "./types";
import { paths } from "../types/openapi";
import qs from "qs";

export class Strapi {
  static defaults<S extends Constructor<any>>(
    this: S,
    defaults: StrapiOptions | Function,
  ) {
    const StrapiWithDefaults = class extends this {
      constructor(...args: any[]) {
        const options = args[0] || {};

        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }

        super(Object.assign({}, defaults, options));
      }
    };

    return StrapiWithDefaults as typeof this;
  }

  static plugins: StrapiPlugin[] = [];

  /**
   * Attach a plugin (or many) to your Strapi instance.
   *
   * @example
   * const API = Strapi.plugin(plugin1, plugin2, plugin3, ...)
   */
  static plugin<
    S extends Constructor<any> & { plugins: any[] },
    T extends StrapiPlugin[],
  >(this: S, ...newPlugins: T) {
    const currentPlugins = this.plugins;
    const NewStrapi = class extends this {
      static plugins = currentPlugins.concat(
        newPlugins.filter((plugin) => !currentPlugins.includes(plugin)),
      );
    };

    return NewStrapi as typeof this &
      Constructor<UnionToIntersection<ReturnTypeOf<T>>>;
  }

  fetch: Client<paths>;
  options: StrapiOptions;

  constructor(options: StrapiOptions) {
    this.fetch = createClient<paths>({
      baseUrl: options.baseUrl + "/api",
      querySerializer(params) {
        return qs.stringify(params, {
          encodeValuesOnly: true, // prettify URL
        });
      },
    });
    this.options = options;

    // apply plugins
    // https://stackoverflow.com/a/16345172
    const classConstructor = this.constructor as typeof Strapi;
    for (let i = 0; i < classConstructor.plugins.length; ++i) {
      // @ts-ignore
      Object.assign(this, classConstructor.plugins[i](this, options));
    }
  }
}
