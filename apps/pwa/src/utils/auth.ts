import { API_URL } from "@/config/common";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import api from "./api";
import { UserRole } from "@/types";

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
      api.options.token = token.strapiToken;

      const r = await fetch(`${API_URL}/users/me?populate=role`, {
        headers: {
          Authorization: `Bearer ${token.strapiToken}`,
        },
      });
      const data = await r.json();
      const role = data.role as UserRole;
      session.strapi = token.strapi;
      session.role = role;

      return session;
    },
  },
});
