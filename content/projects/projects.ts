import type {Project} from '@/types/domain';

export const projects: Project[] = [
  {
    id: 'ramf',
    slug: 'ramf',
    featured: true,
    title: 'RAMF',
    subtitle: {
      es: 'Plataforma web orientada a operación y gestión interna',
      en: 'Web platform focused on operations and internal management'
    },
    description: {
      es: 'Proyecto estructurado como sistema real, con arquitectura modular y foco en consistencia de interfaz para escalar funcionalidades.',
      en: 'Structured as a real system with modular architecture and UI consistency designed for feature scalability.'
    },
    problem: {
      es: 'Necesidad de centralizar procesos operativos y digitalizar tareas dispersas.',
      en: 'Need to centralize operational processes and digitize scattered workflows.'
    },
    solution: {
      es: 'Diseño de una solución frontend robusta con componentes reutilizables y flujos claros para usuarios internos.',
      en: 'Designed a robust frontend solution with reusable components and clear workflows for internal users.'
    },
    role: {
      es: 'Frontend Developer (arquitectura UI, experiencia y evolución funcional).',
      en: 'Frontend Developer (UI architecture, UX and functional evolution).'
    },
    type: {es: 'Sistema de gestión', en: 'Management system'},
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    links: {},
    image: '/project-placeholders/ramf.jpg'
  },
  {
    id: 'clinic-system',
    slug: 'clinic-system',
    featured: true,
    title: 'Sistema de clínica',
    subtitle: {
      es: 'Gestión integral para operación clínica',
      en: 'Comprehensive management system for clinic operations'
    },
    description: {
      es: 'Aplicación para administración de pacientes, historial, paneles administrativos y procesos internos clínicos.',
      en: 'Application for managing patients, records, admin dashboards and internal clinic workflows.'
    },
    problem: {
      es: 'Procesos críticos y datos clínicos dispersos dificultaban seguimiento y operación diaria.',
      en: 'Critical processes and clinical data were fragmented, making tracking and daily operations harder.'
    },
    solution: {
      es: 'Implementación de módulos de gestión con una interfaz clara para seguimiento operativo y control administrativo.',
      en: 'Implemented management modules with a clear interface for operational tracking and administrative control.'
    },
    role: {
      es: 'Frontend Developer con integración a APIs y coordinación de estructura de UI.',
      en: 'Frontend Developer integrating APIs and structuring UI architecture.'
    },
    type: {es: 'Software de salud', en: 'Healthcare software'},
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui'],
    links: {},
    image: '/project-placeholders/clinic.jpg'
  },
  {
    id: 'terrace-booking',
    slug: 'terrace-booking',
    featured: false,
    title: 'Sistema de reserva de terraza',
    subtitle: {
      es: 'Gestión digital de disponibilidad y reservas',
      en: 'Digital solution for availability and booking management'
    },
    description: {
      es: 'Solución para administrar espacios y reservas con foco en experiencia de usuario simple y efectiva.',
      en: 'Solution to manage spaces and bookings with a simple and effective user experience.'
    },
    problem: {
      es: 'La coordinación manual de reservas generaba fricción y baja trazabilidad.',
      en: 'Manual booking coordination created friction and low traceability.'
    },
    solution: {
      es: 'Flujo digital de reservas con visibilidad de disponibilidad y validación de operaciones.',
      en: 'Digital booking flow with clear availability visibility and operation validation.'
    },
    role: {
      es: 'Diseño e implementación frontend de flujos de reserva.',
      en: 'Frontend design and implementation of booking flows.'
    },
    type: {es: 'Sistema de reservas', en: 'Booking system'},
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {},
    image: '/project-placeholders/terrace.jpg'
  },
  {
    id: 'greenhouse-monitoring',
    slug: 'greenhouse-monitoring',
    featured: false,
    title: 'Sistema de monitoreo de estufa de cultivo',
    subtitle: {
      es: 'Dashboard de seguimiento operativo y visualización',
      en: 'Operational monitoring and data visualization dashboard'
    },
    description: {
      es: 'Plataforma de monitoreo para observar estado y variables de una estufa de cultivo en un contexto técnico real.',
      en: 'Monitoring platform to track greenhouse status and variables in a real technical context.'
    },
    problem: {
      es: 'La falta de visualización centralizada complicaba el control del estado operativo.',
      en: 'Lack of centralized visualization made operational control difficult.'
    },
    solution: {
      es: 'Dashboard con visualización de métricas clave y seguimiento continuo para mejorar la toma de decisiones.',
      en: 'Dashboard with key metric visualization and continuous monitoring to improve decision-making.'
    },
    role: {
      es: 'Frontend Developer enfocado en visualización y diseño de panel.',
      en: 'Frontend Developer focused on data visualization and dashboard design.'
    },
    type: {es: 'Monitoreo técnico', en: 'Technical monitoring'},
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    links: {},
    image: '/project-placeholders/greenhouse.jpg'
  },
  {
    id: 'ga-alberdi',
    slug: 'ga-alberdi',
    featured: true,
    title: 'GA Alberdi',
    subtitle: {
      es: 'Digitalización comercial desde una hoja de cálculo a ecommerce ligero',
      en: 'Business digitization from spreadsheet to lightweight commerce flow'
    },
    description: {
      es: 'Transformación de una hoja de cálculo en una web funcional de catálogo, carrito y envío de pedido por WhatsApp.',
      en: 'Transformed a spreadsheet into a functional web flow with catalog, cart and WhatsApp order handoff.'
    },
    problem: {
      es: 'El proceso comercial dependía de datos tabulares y pasos manuales con fricción para vender.',
      en: 'The commercial process relied on tabular data and manual steps that created conversion friction.'
    },
    solution: {
      es: 'Diseño de experiencia web usable para navegar productos, armar carrito y cerrar pedido por WhatsApp.',
      en: 'Designed a usable web experience to browse products, build cart and submit orders via WhatsApp.'
    },
    role: {
      es: 'Frontend/Product Developer orientado a usabilidad y conversión.',
      en: 'Frontend/Product Developer focused on usability and conversion.'
    },
    type: {es: 'Digitalización comercial', en: 'Commercial digitization'},
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    links: {},
    image: '/project-placeholders/ga-alberdi.jpg'
  }
];
