import type {SkillCategory} from '@/types/domain';

export const skillsByCategory: SkillCategory[] = [
  {
    id: 'frontend',
    title: {es: 'Frontend', en: 'Frontend'},
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui']
  },
  {
    id: 'backend',
    title: {es: 'Backend', en: 'Backend'},
    skills: ['NestJS', 'Node.js', 'REST APIs']
  },
  {
    id: 'state-data',
    title: {es: 'Estado y datos', en: 'State and data'},
    skills: ['Zustand', 'Prisma']
  },
  {
    id: 'databases',
    title: {es: 'Base de datos', en: 'Databases'},
    skills: ['PostgreSQL', 'MongoDB']
  },
  {
    id: 'tools',
    title: {es: 'Herramientas', en: 'Tools'},
    skills: ['Docker', 'Git']
  }
];
