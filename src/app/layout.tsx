import { cn } from "@/lib/cn";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortFit",
  keywords: "siłownia, fitness, elbląg, portfit, zajęcia grupowe, aerobik",
  description:
    "Klub Portfit w Elblągu to doskonale wyposażona siłowania oferująca m.in. ćwiczenia fitness power, kardio, a także zajęcia grupowe typu  zumba, aerobik i wiele innych. Wszystkich zainteresowanych serdecznie zapraszamy do kontaktu.",
  colorScheme: "dark",
  openGraph: {
    title: "PortFit",
    description:
      "Klub Portfit w Elblągu to doskonale wyposażona siłowania oferująca m.in. ćwiczenia fitness power, kardio, a także zajęcia grupowe typu  zumba, aerobik i wiele innych. Wszystkich zainteresowanych serdecznie zapraszamy do kontaktu.",
    type: "website",
    locale: "pl_PL",
    url: "https://portfit.pl",
    images: ["/favicon.ico"],
  },
  twitter: {
    title: "PortFit",
    description:
      "Klub Portfit w Elblągu to doskonale wyposażona siłowania oferująca m.in. ćwiczenia fitness power, kardio, a także zajęcia grupowe typu  zumba, aerobik i wiele innych. Wszystkich zainteresowanych serdecznie zapraszamy do kontaktu.",
    card: "summary_large_image",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="w-full h-full scroll-smooth">
      <body
        className={cn("w-full h-full bg-zinc-900 text-white", inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
