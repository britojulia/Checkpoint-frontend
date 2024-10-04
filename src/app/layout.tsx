import type { Metadata } from "next";
import Cabecalho from "./components/Cabecalho/cabecalho";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho/>
        {children}
      </body>
    </html>
  );
}
