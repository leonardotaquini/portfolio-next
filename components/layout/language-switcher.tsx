'use client';

import {usePathname, useRouter} from 'next/navigation';
import {Languages} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {locales} from '@/config/site';
import type {Locale} from '@/types/i18n';

export function LanguageSwitcher({locale}: {locale: Locale}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
      segments[0] = nextLocale;
    }
    router.push(`/${segments.join('/')}`);
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-border bg-card p-1">
      <Languages className="ml-1 size-4 text-muted" />
      {locales.map((value) => (
        <Button
          key={value}
          variant={value === locale ? 'default' : 'ghost'}
          size="sm"
          onClick={() => switchLocale(value)}
          aria-label={`Switch language to ${value}`}
        >
          {value.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
