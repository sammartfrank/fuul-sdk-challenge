'use client';

import { useSDK } from '@metamask/sdk-react';
import { useState } from 'react';
import { NFT } from 'full-sdk/types';

import { Referral } from '@/components/Referral';
import { NFTList } from '@/components/NFTList';

export const HomePage = ({
  nfts,
  getTrackingLink,
}: {
  nfts: NFT[];
  getTrackingLink: (add: string) => Promise<string>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { account } = useSDK();

  return (
    <main className='max-w-screen-xl justify-center mx-auto'>
      <NFTList nfts={nfts} setIsOpen={setIsOpen} />
      <Referral isOpen={isOpen} setIsOpen={setIsOpen} account={account!} getTrackingLink={getTrackingLink} />
    </main>
  );
};
