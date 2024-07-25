'use client';

import { useSDK } from '@metamask/sdk-react';

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from './ui/button';
import { formatAddress } from '../lib/utils';

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (!sdk) return;
    sdk.terminate();
  };

  return (
    <div className='relative'>
      {connected ? (
        <Popover>
          <PopoverTrigger>
            <Button>{formatAddress(account)}</Button>
          </PopoverTrigger>
          <PopoverContent className='mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10'>
            <button
              onClick={disconnect}
              className='block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200'
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          Metamask Wallet
        </Button>
      )}
    </div>
  );
};
