export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  longDescription?: string;
  location: string;
  industry: string;
  employees: string;
  founded?: string;
  website: string;
  email?: string;
  phone?: string;
  address?: string;
  openPositions: number;
  social?: {
    website?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
  benefits?: string[];
  mission?: string;
  vision?: string;
}

export interface Job {
  id: string;
  title: string;
  company: {
    id: string;
    name: string;
    logo: string;
    description: string;
    location: string;
    industry: string;
    employees: string;
    website: string;
    openPositions: number;
  };
  location: string;
  type: string;
  experienceLevel?: string;
  category?: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  salary?: string;
  salaryRange?: {
    min: number;
    max: number;
  };
  postedAt: string;
  postedDate: string;
  tags: string[];
  featured: boolean;
}