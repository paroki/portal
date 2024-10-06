import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

declare module "next-auth" {
  interface User {
    id?: string;
    jwt: string;
  }

  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    jwt: string;
    id: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({})],
  callbacks: {
    session: async ({ session, user }) => {
      session.jwt = user.jwt;
      // session.id = user.id;
      return Promise.resolve(session);
    },
  },
});
