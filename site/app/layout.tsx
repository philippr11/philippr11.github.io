import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout";
import { GoogleTagManager } from "@next/third-parties/google";
import { CookieBanner } from "@/components/cookieBanner";

export const metadata: Metadata = {
  title: "Finanzferkel",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen h-full flex flex-col items-start bg-primary-light50">
        <GoogleTagManager gtmId={`${process.env.GTM_ID}`}  />
        <CookieBanner />
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  );
}
