import { Suspense } from 'react';

const LoadingElement = () => <p className='p-2 rounded-md bg-zinc-200 border border-zinc-900'>Loading</p>;

export const ReferralServer = async ({
  getTrackingLink,
  account,
}: {
  getTrackingLink: (add: string) => Promise<string>;
  account: string;
}) => {
  const trackingLink = await getTrackingLink(account);
  return (
    <Suspense fallback={<LoadingElement />}>
      <p className='p-2 rounded-md hover:cursor-pointer bg-zinc-200 border border-zinc-900'>{trackingLink}</p>
    </Suspense>
  );
};
