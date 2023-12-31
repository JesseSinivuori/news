import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { FilterMenuProvider } from "./providers/FilterMenuProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News",
  description: "Your news, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col items-center">
          <FilterMenuProvider>
            <Toaster
              position="bottom-center"
              toastOptions={{ className: "!bg-zinc-50 !text-zinc-950/90" }}
            />
            <Navbar />
            <main className="flex flex-col pt-16 w-full max-w-[1440px] overflow-hidden">
              {children}
            </main>
          </FilterMenuProvider>
        </div>
      </body>
    </html>
  );
}
