"use client";

import { useTheme } from "next-themes";
import type { ComponentPropsWithoutRef } from "react";
import { Particles } from "@/components/ui/particles";

type ThemedParticlesProps = Omit<ComponentPropsWithoutRef<typeof Particles>, "color">;

export function ThemedParticles(props: ThemedParticlesProps) {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme === "light" ? "#6366f1" : "#ffffff";

  return <Particles {...props} color={color} />;
}
