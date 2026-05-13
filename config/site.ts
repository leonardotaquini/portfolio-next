import type {Locale} from '@/types/i18n';

export const locales = ['es', 'en'] as const;
export const defaultLocale: Locale = 'es';

export const siteConfig = {
  name: 'Leonardo Gabriel Taquini',
  email: 'leonardogtaquini@gmail.com',
  phone: '+54 3704 076787',
  location: 'Formosa, Argentina',
  social: {
    github: 'https://github.com/leonardotaquini',
    linkedin: 'https://www.linkedin.com/in/leonardo-gabriel-taquini-4b22a02a2/',
    portfolio: 'https://leonardotaquini.com'
  },
  cvByLocale: {
    es: '/cv/leonardo-taquini-cv-es.pdf',
    en: '/cv/leonardo-taquini-cv-en.pdf'
  }
};
