import {Download} from 'lucide-react';
import {siteConfig} from '@/config/site';
import type {Locale} from '@/types/i18n';
import {buttonVariants} from '@/components/ui/button';
import {cn} from '@/lib/utils';

type CVDownloadButtonProps = {
  locale: Locale;
  label: string;
  className?: string;
};

export function CVDownloadButton({locale, label, className}: CVDownloadButtonProps) {
  const href = siteConfig.cvByLocale[locale];

  return (
    <a href={href} download className={cn(buttonVariants({variant: 'outline'}), className)}>
      <Download className="size-4" />
      {label}
    </a>
  );
}
