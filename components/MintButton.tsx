import { useSDK } from '@metamask/sdk-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

export const MintButton = ({ setIsOpen }: { setIsOpen: (val: boolean) => void }) => {
  const { account } = useSDK();
  const handleMintNFT = async () => {
    const fuulSignatureMessage = 'Sign this message to mint your NFT';
    try {
      const from = account;
      const msg = `0x${Buffer.from(fuulSignatureMessage, 'utf8').toString('hex')}`;
      await window?.ethereum?.request({
        method: 'personal_sign',
        params: [msg, from],
      });

      setIsOpen(true);
      toast.success('NFT minted successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Error minting NFT');
    }
  };

  return <Button onClick={() => handleMintNFT()}>Mint NFT</Button>;
};
