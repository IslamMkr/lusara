import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { classNames } from './classNames';

type CardVariant = 'solid' | 'dashed';

export type CardProps<T extends ElementType = 'div'> = {
  as?: T;
  variant?: CardVariant;
  shadow?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

const variantClasses: Record<CardVariant, string> = {
  solid: 'border border-[#e2d5c7] bg-white/70',
  dashed: 'border border-dashed border-[#d9c8b5] bg-white/40',
};

export function Card<T extends ElementType = 'div'>({
  as,
  variant = 'solid',
  shadow = false,
  className,
  ...props
}: CardProps<T>) {
  const Component = as ?? 'div';
  return (
    <Component
      className={classNames(
        'rounded-3xl p-6',
        variantClasses[variant],
        shadow && 'shadow-[0_20px_40px_-32px_rgba(30,27,22,0.6)]',
        className
      )}
      {...props}
    />
  );
}
