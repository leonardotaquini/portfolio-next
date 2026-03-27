import type {Locale} from '@/types/i18n';

export type LocalizedText = Record<Locale, string>;

export type ExperienceItem = {
  id: string;
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  bullets: Record<Locale, string[]>;
};

export type SkillCategory = {
  id: string;
  title: LocalizedText;
  skills: string[];
};

export type Project = {
  id: string;
  slug: string;
  featured: boolean;
  title: string;
  subtitle: LocalizedText;
  description: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  role: LocalizedText;
  type: LocalizedText;
  stack: string[];
  links: {
    demo?: string;
    repository?: string;
  };
  image: string;
};
