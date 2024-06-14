import axios from "axios";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

interface UserData {
  email: string;
  name?: string;
  _id: string;
  role: string;
  phone?: string;
  image?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

const authOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        const { email, password } = credentials;

        try {
          const response = await axios.post("/api/students/login", credentials);

          // const data = await response.json();
          return response;
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  // session: {
  //   jwt: true,
  // },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
