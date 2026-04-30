"use client";

import type { Adapter } from "@solana/wallet-adapter-base";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import React, { FC, useMemo } from "react";

import "@solana/wallet-adapter-react-ui/styles.css";

type Props = {
  children?: React.ReactNode;
};

export const WalletAdapterProvider: FC<Props> = ({ children }) => {
  const wallets = useMemo<Adapter[]>(
    () => [
      /**
       * Wallets that implement Solana Wallet Standard or Mobile Wallet Adapter
       * are discovered automatically.
       *
       * Add explicit legacy wallet adapters here only if needed.
       */
    ],
    []
  );

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  );
};
