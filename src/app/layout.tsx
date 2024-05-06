import "@/styles/globals.css";

import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Adso",
  description: "Helping you find your way through the labyrinth.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="gianni">
      <body className={`font-sans ${inter.variable} p-2`}>
        <NavBar />
        <main className="flex justify-center pb-10 pt-28">{children}</main>
      </body>
    </html>
  );
}
