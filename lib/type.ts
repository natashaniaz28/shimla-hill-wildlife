export interface Animal {
  id: string;
  commonName: string;
  scientificName: string;
  category: string;
  group?: string;

  introduction: string;
  distribution: string;
  habitat?: string;

  breeding?: {
    season?: string;
    incubationPeriod?: string;
    clutchSize?: string;
    gestationPeriod?: string;
  };

  conservationStatus: {
    iucn: string;
  };

  images: string[];
}
