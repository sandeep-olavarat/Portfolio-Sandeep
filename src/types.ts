export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string | string[];
  icon: string;
  isCurrent?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
}

export interface Recognition {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
}
