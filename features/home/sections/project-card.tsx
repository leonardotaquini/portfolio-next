import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Project } from "@/types/domain";
import type {Locale} from '@/types/i18n';
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ProjectCard = ({ project, t, locale, }: { project: Project; t: any; locale: Locale; }) => {
    
  return (
    <Card
      key={project.id}
      className="overflow-hidden p-0 transition-all hover:-translate-y-1 hover:border-accent/40"
    >
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-xl font-semibold transition-colors hover:text-accent"
            >
              {project.title}
              <ExternalLink className="size-4 opacity-40 transition-opacity group-hover:opacity-100" />
            </a>
          ) : (
            <h3 className="text-xl font-semibold">{project.title}</h3>
          )}
          {project.featured ? (
            <Badge className="border-indigo-400/40 text-indigo-300">
              {t("featured")}
            </Badge>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-muted">{project.subtitle[locale]}</p>
        <p className="mt-4 text-foreground/80">{project.description[locale]}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">
              {t("problem")}
            </p>
            <p className="mt-1 text-sm text-foreground/80">
              {project.problem[locale]}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">
              {t("solution")}
            </p>
            <p className="mt-1 text-sm text-foreground/80">
              {project.solution[locale]}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">
              {t("role")}
            </p>
            <p className="mt-1 text-sm text-foreground/80">
              {project.role[locale]}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">
              {t("type")}
            </p>
            <p className="mt-1 text-sm text-foreground/80">
              {project.type[locale]}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {project.links.repository && (
          <div className="mt-6">
            <a
              href={project.links.repository}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <Github className="size-4" />
              {t("repository")}
            </a>
          </div>
        )}
      </div>
    </Card>
  );
};
