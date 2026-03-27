import Link from 'next/link';
import {ArrowDownRight, Mail} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {headline, heroSummary} from '@/content/profile/profile';
import type {Locale} from '@/types/i18n';
import {siteConfig} from '@/config/site';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {SocialLinks} from '@/components/shared/social-links';
import {CVDownloadButton} from '@/components/shared/cv-download-button';

export async function HeroSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'hero'});

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-32">
      <div className="container">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-gradient-to-b from-card to-background p-8 md:p-12">
          <Badge>{t('availability')}</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">{siteConfig.name}</h1>
          <p className="mt-4 max-w-3xl text-lg text-zinc-300">{headline[locale]}</p>
          <p className="mt-3 max-w-2xl text-muted">{heroSummary[locale]}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex">
              <Button>
                {t('viewProjects')}
                <ArrowDownRight className="size-4" />
              </Button>
            </Link>
            <CVDownloadButton locale={locale} label={t('downloadCv')} />
            <Link href={`mailto:${siteConfig.email}`} className="inline-flex">
              <Button variant="ghost">
                <Mail className="size-4" />
                {t('contactMe')}
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
            <span>{siteConfig.location}</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
