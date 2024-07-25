'use client';
import { Dispatch, SetStateAction, Suspense, useCallback } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from './ui/label';

import { ReferralServer } from './ReferralServer';

export function Referral({
  account,
  getTrackingLink,
  isOpen,
  setIsOpen,
}: {
  account: string;
  isOpen: boolean;
  getTrackingLink: (account: string) => Promise<string>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const handleCloseDialog = useCallback(() => setIsOpen(false), [setIsOpen]);
  if (!account) return;
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='sm:max-w-[640px]'>
        <DialogHeader>
          <DialogTitle>Referral</DialogTitle>
          <DialogDescription>Refer others and earn commissions!</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-3 py-4'>
          <Label>Tracking Link</Label>
          <Suspense
            fallback={
              <p className='p-2 rounded-md hover:cursor-pointer bg-zinc-200 border border-zinc-900'>
                Loading Tracking Link...
              </p>
            }
          >
            <ReferralServer account={account} getTrackingLink={getTrackingLink} />
          </Suspense>
        </div>
        <DialogFooter>
          <Button onClick={handleCloseDialog}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
