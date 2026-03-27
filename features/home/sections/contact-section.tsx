import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {siteConfig} from '@/config/site';
import type {Locale} from '@/types/i18n';
import {SectionHeading} from '@/components/shared/section-heading';
import {Button} from '@/components/ui/button';
import {CVDownloadButton} from '@/components/shared/cv-download-button';
import {SocialLinks} from '@/components/shared/social-links';

export async function ContactSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'contact'});

  return (
    <section id="contact" className="container py-20">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
        <p className="mt-4 max-w-2xl text-zinc-300">{t('description')}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`mailto:${siteConfig.email}`}>
            <Button>{t('email')}</Button>
          </Link>
          <CVDownloadButton locale={locale} label={t('downloadCv')} />
        </div>

        <div className="mt-6 text-sm text-muted">
          <p>{siteConfig.email}</p>
          <p>{siteConfig.phone}</p>
        </div>

        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
