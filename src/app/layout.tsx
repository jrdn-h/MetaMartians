import { ThemeProviderWrapper } from "@/providers/themeProvider";
import { WalletAdapterProvider } from "@/providers/walletAdapterProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UmiProvider } from "@/providers/umiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaplex Umi Next.js",
  description: "Metaplex template for Next.js using Umi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <WalletAdapterProvider>
          <UmiProvider>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
          </UmiProvider>
        </WalletAdapterProvider>
      </body>
    </html>
  );
}
