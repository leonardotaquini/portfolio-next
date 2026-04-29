import {getTranslations} from 'next-intl/server';
import {projects} from '@/content/projects/projects';
import type {Locale} from '@/types/i18n';
import {SectionHeading} from '@/components/shared/section-heading';
import { ProjectCard } from './project-card';

export async function ProjectsSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'projects'});

  return (
    <section id="projects" className="container py-20">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
      <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} t={t} locale={locale} />
        ))}
      </div>
    </section>
  );
}
