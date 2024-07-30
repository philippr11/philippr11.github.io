import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Jonathan Weiß",
  description: "Personal website of Jonathan Weiß",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  );
}
