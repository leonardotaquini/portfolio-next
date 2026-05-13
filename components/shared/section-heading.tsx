import { BlurFade } from "../ui/blur-fade";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
};

export function SectionHeading({eyebrow, title, align = 'left'}: SectionHeadingProps) {
  return (
    <header className={align === 'center' ? 'text-center' : ''}>
      <p className="section-subtitle">{eyebrow}</p>
      <BlurFade>
        <h2 className="section-title mt-2">{title}</h2>
      </BlurFade>
    </header>
  );
}
