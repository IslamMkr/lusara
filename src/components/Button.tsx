import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';
import { classNames } from './classNames';

type ButtonVariant = 'solid' | 'outline';
type ButtonSize = 'md' | 'sm';

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseClasses =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold uppercase tracking-[0.2em] transition';

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-[#1e1b16] text-[#f6efe6] hover:bg-[#3a3127]',
  outline:
    'border border-[#cbb8a4] text-[#1e1b16] hover:bg-white/80',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-12 px-6',
  sm: 'h-10 px-5 text-xs',
};

export function Button(props: ButtonProps) {
  const { variant = 'solid', size = 'md', className } = props;
  const classes = classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ('href' in props) {
    const {
      href,
      variant: _variant,
      size: _size,
      className: _className,
      ...linkProps
    } = props;
    return <a href={href} className={classes} {...linkProps} />;
  }

  const {
    type = 'button',
    variant: _variant,
    size: _size,
    className: _className,
    ...buttonProps
  } = props;
  return <button type={type} className={classes} {...buttonProps} />;
}
