import Header from "@/components/Header";
import "./globals.css";
import { Noto_Sans_Mono } from "next/font/google";
import Footer from "@/components/Footer";

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
      <body className={noto_Sans_Mono.className}>
        <Header />
        <main className="mx-auto mt-14 flex w-full min-w-[360px] max-w-5xl flex-col items-center justify-between gap-20 p-4 sm:gap-28 lg:p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
