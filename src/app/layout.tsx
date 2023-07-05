import { cn } from "@/lib/cn";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PortFit",
  description: "PortFit is a gym in Elbląg, Poland",
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
