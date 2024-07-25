export interface ProjectInfo {
  name: string;
  description: string;
  hostedURL: string;
}

export enum NFTCategory {
  ART = 'ART',
  MUSIC = 'MUSIC',
  VIDEO = 'VIDEO',
  GAMING = 'GAMING',
}

export interface NFT {
  id: string;
  name: string;
  category: NFTCategory;
  editionsAvailable: number;
}

export interface FuulSDK {
  init: (apiKey: string) => Promise<void>;
  getProjectInfo: () => ProjectInfo | null;
  getNFTs: () => NFT[];
  mintNFT: (nftId: string, walletAddress: string) => Promise<boolean>;
  getTrackingLink: (walletAddress: string) => string;
}
