export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
};

export type Skill = {
  category: string;
  skills: string[];
};

export type Experience = {
  id: number;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

export type Education = {
  id: number;
  school: string;
  degree: string;
  field: string;
  year: string;
  description?: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};
