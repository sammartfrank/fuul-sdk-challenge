import { HomePage } from '@/views/HomePage';
import fuul from 'full-sdk';

const { getTrackingLink, nfts } = await fuul(process.env.API_KEY!);

async function handleTrackingLink(account: string) {
  'use server';
  return await getTrackingLink(account);
}

export default async function Home() {
  return <HomePage nfts={nfts} getTrackingLink={handleTrackingLink} />;
}
