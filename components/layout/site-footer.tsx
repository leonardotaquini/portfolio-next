import {getTranslations} from 'next-intl/server';
import {siteConfig} from '@/config/site';
import type {Locale} from '@/types/i18n';

export async function SiteFooter({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'footer'});

  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p>{t('rights')}</p>
      </div>
    </footer>
  );
}
