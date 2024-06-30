import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Poppins({ weight: ['300', '400', '500', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "EConverseAG - Front-end Challenge",
  description: "Teste técnico Front-end para a EConverseAG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
