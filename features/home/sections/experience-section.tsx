import {getTranslations} from 'next-intl/server';
import {experienceItems} from '@/content/experience/experience';
import type {Locale} from '@/types/i18n';
import {SectionHeading} from '@/components/shared/section-heading';
import {Card} from '@/components/ui/card';

export async function ExperienceSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'experience'});

  return (
    <section id="experience" className="container py-20">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
      <div className="mt-10 space-y-4">
        {experienceItems.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-semibold">{item.company}</h3>
              <span className="text-sm text-muted">{item.period[locale]}</span>
            </div>
            <p className="mt-2 text-zinc-300">{item.role[locale]}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {item.bullets[locale].map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
