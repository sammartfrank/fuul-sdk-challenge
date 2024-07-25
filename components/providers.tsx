'use client';

import { MetaMaskProvider } from '@metamask/sdk-react';

const host = typeof window !== 'undefined' ? window.location.host : '';

const sdkOptions = {
  checkInstallationImmediately: false,
  dappMetadata: {
    name: 'Fuul NFTs',
    url: host,
  },
};

export function Providers(props: { children: React.ReactNode }) {
  return (
    <MetaMaskProvider sdkOptions={sdkOptions}>
    {props.children}
  </MetaMaskProvider>);
}
