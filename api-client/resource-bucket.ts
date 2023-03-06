export type ResourceBucketItem = {
  isMovie: boolean;
  name: string;
  width: number;
  height: number;
  duration?: number;
};

export type ResourceBucketManifest = Record<string, ResourceBucketItem[]>;
