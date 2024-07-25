import { useSDK } from '@metamask/sdk-react';
import Image from 'next/image';
import { NFT } from 'full-sdk/types';

import { Label } from './ui/label';
import { MintButton } from './MintButton';

export const NFTCard = ({ nft, setIsOpen }: { nft: NFT; setIsOpen: any }) => {
  const { connected } = useSDK();
  return (
    <div key={nft.id} className='flex flex-col gap-1 items-evenly p-4 rounded-md shadow-lg cursor-pointer'>
      <Image src={nft.image!} alt={nft.name} width={200} height={200} objectFit='cover' />
      <Label className='text-xl font-bold text-wrap'>{nft.name}</Label>
      <p className='text-lg'>Price: {nft.ethPrice}ETH</p>
      {connected && <MintButton setIsOpen={setIsOpen} />}
    </div>
  );
};
