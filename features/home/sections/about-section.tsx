import {getTranslations} from 'next-intl/server';
import {aboutSummary} from '@/content/profile/profile';
import type {Locale} from '@/types/i18n';
import {SectionHeading} from '@/components/shared/section-heading';

export async function AboutSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'about'});

  return (
    <section id="about" className="container py-20">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
      <p className="mt-6 max-w-4xl text-base leading-relaxed text-foreground/80 md:text-lg">{aboutSummary[locale]}</p>
    </section>
  );
}
