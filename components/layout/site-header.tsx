import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {LanguageSwitcher} from '@/components/layout/language-switcher';
import {ThemeToggle} from '@/components/layout/theme-toggle';
import {siteConfig} from '@/config/site';
import type {Locale} from '@/types/i18n';

const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'] as const;

export async function SiteHeader({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'nav'});

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-wide">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-foreground/80 lg:flex">
          {navItems.map((id) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">
              {t(id)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
