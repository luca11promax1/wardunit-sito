import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: { params: { scope: "identify email guilds" } },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token?.sub) {
        (session.user as { id?: string }).id = token.sub;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST }; 