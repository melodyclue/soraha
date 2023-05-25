import "./globals.css";
import { mPlusRFont } from "~/lib/font";
import { Analytics } from "@vercel/analytics/react";
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={notojp.variable}>
      <body className="">
        {children} <Analytics />
      </body>
    </html>
  );
}
