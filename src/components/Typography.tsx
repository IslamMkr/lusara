import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { classNames } from './classNames';

type HeadingVariant = 'hero' | 'section' | 'card';
type TextVariant = 'lead' | 'body' | 'muted' | 'eyebrow' | 'micro';

export type HeadingProps<T extends ElementType = 'h2'> = {
  as?: T;
  variant?: HeadingVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export type TextProps<T extends ElementType = 'p'> = {
  as?: T;
  variant?: TextVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

const headingClasses: Record<HeadingVariant, string> = {
  hero: 'text-4xl font-semibold leading-tight tracking-tight sm:text-5xl',
  section: 'text-2xl font-semibold tracking-tight',
  card: 'text-xl font-semibold',
};

const textClasses: Record<TextVariant, string> = {
  lead: 'text-lg leading-relaxed text-[#5b5046]',
  body: 'text-base leading-relaxed text-[#5b5046]',
  muted: 'text-sm text-[#5b5046]',
  eyebrow: 'text-sm uppercase tracking-[0.25em] text-[#6b5f52]',
  micro: 'text-xs uppercase tracking-[0.25em] text-[#6b5f52]',
};

export function Heading<T extends ElementType = 'h2'>({
  as,
  variant = 'section',
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? 'h2';
  return (
    <Component
      className={classNames(headingClasses[variant], className)}
      {...props}
    />
  );
}

export function Text<T extends ElementType = 'p'>({
  as,
  variant = 'body',
  className,
  ...props
}: TextProps<T>) {
  const Component = as ?? 'p';
  return (
    <Component className={classNames(textClasses[variant], className)} {...props} />
  );
}
