import {getTranslations} from 'next-intl/server';
import {skillsByCategory} from '@/content/skills/skills';
import type {Locale} from '@/types/i18n';
import {SectionHeading} from '@/components/shared/section-heading';
import {Card} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

export async function SkillsSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'skills'});

  return (
    <section id="skills" className="container py-20">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillsByCategory.map((category) => (
          <Card key={category.id}>
            <h3 className="text-lg font-medium">{category.title[locale]}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
