import { API_URL } from "@/config/common";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import api from "./api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        try {
          const response = await fetch(
            `${API_URL}/auth/google/callback?access_token=${account.access_token}`,
            {
              cache: "no-cache",
            },
          );
          const data = await response.json();
          token.strapi = data.user;
          token.strapiToken = data.jwt;
        } catch (e) {
          console.log(e);
        }
      }
      return token;
    },
    async session({ token, session }) {
      session.strapi = token.strapi;
      console.log(session);
      api.fetch.use({
        onRequest({ request }) {
          request.headers.set("Authorization", `Bearer ${token.strapiToken}`);
          return request;
        },
      });
      return session;
    },
  },
});
