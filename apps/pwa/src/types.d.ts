export type UserRole = components["schemas"]["Users-Permissions-Role"];

export type StrapiUserSession = {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  locale: string | null;
};

declare module "next-auth" {
  interface User {}

  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    id?: string;
    user?: User;
    strapi?: StrapiUserSession;
    role?: UserRole;
  }
}

import { components } from "@pkrbt/openapi";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT extends BaseJWT {
    blocked?: boolean;
    provider?: "local" | "google";
    strapi?: StrapiUserSession;
    strapiToken?: string;
  }
}
