import { NFT } from 'full-sdk';
import { NFTCard } from './NFTCard';

export const NFTList = ({ nfts, setIsOpen }: { nfts: NFT[]; setIsOpen: any }) => {
  if (!nfts) return <>No NFTs</>;
  return (
    <div className='flex gap-6 flex-row justify-between items-center mt-14'>
      {nfts.map((nft) => (
        <NFTCard key={nft.id} nft={nft} setIsOpen={setIsOpen} />
      ))}
    </div>
  );
};
