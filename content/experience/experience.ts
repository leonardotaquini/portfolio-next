import type {ExperienceItem} from '@/types/domain';

export const experienceItems: ExperienceItem[] = [
  {
    id: 'secyt',
    company: 'Secretaría de Ciencia y Tecnología',
    role: {
      es: 'Desarrollador / Frontend Developer',
      en: 'Frontend Developer'
    },
    period: {
      es: 'Enero 2025 - Actualidad',
      en: 'January 2025 - Present'
    },
    bullets: {
      es: [
        'Desarrollo de aplicaciones web modernas para procesos internos y públicos.',
        'Implementación de interfaces y paneles administrativos con foco en usabilidad.',
        'Integración con APIs y lógica de negocio para flujos operativos reales.',
        'Trabajo con tecnologías actuales del ecosistema JavaScript/TypeScript.',
        'Enfoque en mantenibilidad, escalabilidad y calidad de experiencia de usuario.'
      ],
      en: [
        'Development of modern web applications for internal and public processes.',
        'Implementation of interfaces and admin dashboards with a usability-focused approach.',
        'Integration with APIs and business logic for real operational workflows.',
        'Working with modern JavaScript/TypeScript ecosystem technologies.',
        'Focus on maintainability, scalability, and user experience quality.'
      ]
    }
  },
  {
    id: 'ai-research',
    company: 'Instituto Politécnico Formosa',
    role: {
      es: 'Investigador en Inteligencia Artificial',
      en: 'AI Researcher'
    },
    period: {
      es: 'Enero 2025 - Diciembre 2025',
      en: 'January 2025 - December 2025'
    },
    bullets: {
      es: [
        'Participación en proyectos de investigación aplicados a inteligencia artificial.',
        'Análisis y procesamiento de datos para desarrollo de soluciones técnicas.',
        'Trabajo interdisciplinario con equipos de distintas áreas técnicas.'
      ],
      en: [
        'Participation in applied artificial intelligence research projects.',
        'Data analysis and processing for technical solution development.',
        'Collaboration with interdisciplinary teams across different technical areas.'
      ]
    }
  },
  {
    id: 'ipf',
    company: 'Instituto Politécnico Formosa',
    role: {
      es: 'Jefe de Trabajos Prácticos en Base de Datos',
      en: 'Teaching Assistant (Databases)'
    },
    period: {
      es: '2025 - Actualidad',
      en: '2025 - Present'
    },
    bullets: {
      es: [
        'Acompañamiento en la formación práctica de estudiantes.',
        'Trabajo sobre fundamentos y aplicación de bases de datos relacionales.',
        'Apoyo académico y técnico en actividades de laboratorio.'
      ],
      en: [
        'Hands-on support for students in practical training.',
        'Teaching fundamentals and practical use of relational databases.',
        'Academic and technical support in lab activities.'
      ]
    }
  }
];