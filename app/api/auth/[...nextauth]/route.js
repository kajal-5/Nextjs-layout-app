import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
    GithubProvider({
        clientId: 'Ov23lixbyTOiIU35hRxi',
        clientSecret: '081121395076e74cbb4538742c55205a1376e6f5',

    })
    ],
 })
 export { handler as GET, handler as POST };