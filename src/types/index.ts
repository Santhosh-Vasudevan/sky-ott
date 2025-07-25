export interface ViewCount {
  total: number;
  "sky-go": number;
  "now-tv": number;
  peacock: number;
}

export interface Movie {
  name: string;
  totalViews: ViewCount;
  prevTotalViews: ViewCount;
  description: string;
  duration: number;
  assetImage: string;
  videoImage: string;
  provider: string;
  genre: string[];
}

export interface DataPoint {
  timestamp: number;
  value: number;
}