import {cn} from '@/lib/utils';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({className, children}: CardProps) {
  return <article className={cn('rounded-xl border border-border bg-card p-6 shadow-soft', className)}>{children}</article>;
}
