import type { HTMLAttributes, ReactNode } from 'react';
import { classNames } from './classNames';

type ChipVariant = 'pill' | 'amber' | 'outline' | 'neutral';
type ChipSize = 'md' | 'sm';

export type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: ChipVariant;
  size?: ChipSize;
  leading?: ReactNode;
};

const variantClasses: Record<ChipVariant, string> = {
  pill: 'border border-[#d7c9b7] bg-white/70 text-[#6b5f52]',
  amber: 'bg-[#fef3c7] text-[#92400e]',
  outline: 'border border-[#d9c8b5] text-[#6b5f52]',
  neutral: 'bg-white/80 text-[#6b5f52]',
};

const sizeClasses: Record<ChipSize, string> = {
  md: 'px-4 py-2 text-xs',
  sm: 'px-4 py-1 text-xs',
};

export function Chip({
  variant = 'neutral',
  size = 'sm',
  leading,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={classNames(
        'inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-[0.2em]',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {leading}
      {children}
    </span>
  );
}
