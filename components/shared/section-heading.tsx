type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
};

export function SectionHeading({eyebrow, title, align = 'left'}: SectionHeadingProps) {
  return (
    <header className={align === 'center' ? 'text-center' : ''}>
      <p className="section-subtitle">{eyebrow}</p>
      <h2 className="section-title mt-2">{title}</h2>
    </header>
  );
}
