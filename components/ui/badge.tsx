import {cn} from '@/lib/utils';

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};

export function Badge({className, children}: BadgeProps) {
  return (
    <span className={cn('inline-flex rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted', className)}>
      {children}
    </span>
  );
}
