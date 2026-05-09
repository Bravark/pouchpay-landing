import './Button.css';

/**
 * Button Component - Pouch Design System
 *
 * Variants: primary, secondary, ghost, glow
 * Sizes: small, default, large
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}) {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
