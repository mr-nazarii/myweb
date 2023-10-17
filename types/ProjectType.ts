export interface Source {
  category: string;
  address: string | boolean;
}

export interface ProjectType {
  monthYear: string;
  id: number;
  type: {
    ux: boolean;
    it: boolean;
    branding: boolean;
  };
  color: string;
  name: string;
  desc: string;
  quote: string;
  features: string[];
  techList: string[];
  sources: Source[];
  uxMethods?: string[];
}
