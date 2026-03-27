import type {Locale} from '@/types/i18n';
import {SiteHeader} from '@/components/layout/site-header';
import {SiteFooter} from '@/components/layout/site-footer';
import {HeroSection} from '@/features/home/sections/hero-section';
import {AboutSection} from '@/features/home/sections/about-section';
import {SkillsSection} from '@/features/home/sections/skills-section';
import {ExperienceSection} from '@/features/home/sections/experience-section';
import {ProjectsSection} from '@/features/home/sections/projects-section';
import {ContactSection} from '@/features/home/sections/contact-section';

export default async function HomePage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <AboutSection locale={locale} />
        <SkillsSection locale={locale} />
        <ExperienceSection locale={locale} />
        <ProjectsSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
