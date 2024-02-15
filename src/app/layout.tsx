import type { Metadata } from "next";
import "@/styles/globals.scss";
import {Header} from "@components/Header";
import {Footer} from "@components/Footer";

export const metadata: Metadata = {
  title: "Comagic-Test",
  description: "Тестовое для Comagic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
