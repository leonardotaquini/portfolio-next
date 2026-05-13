import Link from "next/link";
import { ArrowDownRight, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { headline, heroSummary } from "@/content/profile/profile";
import type { Locale } from "@/types/i18n";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/shared/social-links";
import { CVDownloadButton } from "@/components/shared/cv-download-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { ThemedParticles } from "@/components/ui/themed-particles";

export async function HeroSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "hero" });

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-32">
      <div className="container">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-indigo-300/10 dark:bg-gradient-to-b dark:from-card dark:to-background p-8 md:p-12">
          <Badge>{t("availability")}</Badge>
          <BlurFade>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              {siteConfig.name}
            </h1>
          </BlurFade>
          <p className="mt-4 max-w-3xl text-lg text-foreground/80">
            {headline[locale]}
          </p>
          <p className="mt-3 max-w-2xl text-muted">{heroSummary[locale]}</p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="#projects" className="flex sm:inline-flex">
              <Button className="w-full sm:w-auto">
                {t("viewProjects")}
                <ArrowDownRight className="size-4" />
              </Button>
            </Link>
            <CVDownloadButton locale={locale} label={t("downloadCv")} className="w-full sm:w-auto justify-center" />
            <Link href={`mailto:${siteConfig.email}`} className="flex sm:inline-flex">
              <Button variant="ghost" className="w-full sm:w-auto">
                <Mail className="size-4" />
                {t("contactMe")}
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
            <span>{siteConfig.location}</span>
            <SocialLinks />
          </div>
        </div>
      </div>
        <ThemedParticles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
    </section>
  );
}
