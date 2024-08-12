import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "../components/theme-provider";
import Providers from "./provider";
export const metadata: Metadata = {
  title: 'Jobify Dev',
  description: 'Job application tracking system for job hunters',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
  <html lang="en">
      <body className={inter.className}>
        <Providers>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </Providers>
        </body>
    </html>
    </ClerkProvider>
  );
}
