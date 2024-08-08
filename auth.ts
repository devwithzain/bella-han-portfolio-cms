import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import prisma from "@/db/prisma";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { redirect } from "next/navigation";

const credentialsConfig = CredentialsProvider({
   name: "Credentials",
   credentials: {
      email: { label: 'email', type: 'text' },
      password: { label: 'password', type: 'password' }
   },
   async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) {
         throw new Error('Invalid credentials');
      }

      const userEmail = credentials.email as string;
      const userPassword = credentials.password as string;
      const user = await prisma.user.findUnique({
         where: {
            email: userEmail
         }
      });

      if (!user || !user?.hashedPassword) {
         throw new Error('Invalid credentials');
      }

      const isCorrectPassword = await bcrypt.compare(
         userPassword,
         user.hashedPassword
      );

      if (!isCorrectPassword) {
         throw new Error('Invalid credentials');
      }
      return user;
   }
});

const config = {
   providers: [credentialsConfig],
   adapter: PrismaAdapter(prisma),
   session: { strategy: "jwt" },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);


