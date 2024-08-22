import type { Metadata } from "next";
import "./global.scss";

export const metadata: Metadata = {
  title: "Ide Ação Social",
  description: "Criado para impactar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
