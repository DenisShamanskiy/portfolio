import "./globals.css";
import { Noto_Sans_Mono } from "next/font/google";

const noto_Sans_Mono = Noto_Sans_Mono({
  subsets: ["cyrillic"],
  weight: "500",
});

export const metadata = {
  title: "Денис Шаманский",
  description: "Портфолио",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={noto_Sans_Mono.className}>{children}</body>
    </html>
  );
}
