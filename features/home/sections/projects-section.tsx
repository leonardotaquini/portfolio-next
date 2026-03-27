import {getTranslations} from 'next-intl/server';
import {projects} from '@/content/projects/projects';
import type {Locale} from '@/types/i18n';
import {SectionHeading} from '@/components/shared/section-heading';
import {Card} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

export async function ProjectsSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'projects'});

  return (
    <section id="projects" className="container py-20">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
      <div className="mt-10 grid gap-5">
        {projects.map((project) => (
          <Card key={project.id} className="transition-all hover:-translate-y-1 hover:border-accent/40">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.featured ? <Badge className="border-indigo-400/40 text-indigo-300">{t('featured')}</Badge> : null}
            </div>
            <p className="mt-2 text-sm text-muted">{project.subtitle[locale]}</p>
            <p className="mt-4 text-foreground/80">{project.description[locale]}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{t('problem')}</p>
                <p className="mt-1 text-sm text-foreground/80">{project.problem[locale]}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{t('solution')}</p>
                <p className="mt-1 text-sm text-foreground/80">{project.solution[locale]}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{t('role')}</p>
                <p className="mt-1 text-sm text-foreground/80">{project.role[locale]}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{t('type')}</p>
                <p className="mt-1 text-sm text-foreground/80">{project.type[locale]}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
