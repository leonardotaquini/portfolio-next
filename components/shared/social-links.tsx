import Link from 'next/link';
import {Github, Globe, Linkedin} from 'lucide-react';
import {siteConfig} from '@/config/site';

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link href={siteConfig.social.github} target="_blank" aria-label="GitHub" className="rounded-md border border-border p-2 hover:bg-card">
        <Github className="size-4" />
      </Link>
      <Link href={siteConfig.social.linkedin} target="_blank" aria-label="LinkedIn" className="rounded-md border border-border p-2 hover:bg-card">
        <Linkedin className="size-4" />
      </Link>
      <Link href={siteConfig.social.portfolio} target="_blank" aria-label="Portfolio" className="rounded-md border border-border p-2 hover:bg-card">
        <Globe className="size-4" />
      </Link>
    </div>
  );
}
