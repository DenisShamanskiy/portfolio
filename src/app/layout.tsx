import "./globals.css";
import { Noto_Sans_Mono, Montserrat_Alternates } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["500", "900"],
  variable: "--font-noto-sans-mono",
});

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-montserrat-alternates",
});

export const metadata = {
  title: "Денис Шаманский | Frontend Developer",
  description: "Портфолио",
  themeColor: "#eeeeee",
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
    <html
      lang="ru"
      className={`${noto_sans_mono.variable} ${montserrat.variable}`}
    >
      <body className="flex flex-col">
        <Header />
        <main className="mx-auto mt-28 flex w-full min-w-[360px] max-w-5xl flex-col items-center justify-between gap-20 p-4 sm:gap-28 lg:p-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
