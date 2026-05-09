import './Chip.css';

/**
 * Chip/Tag Component - Pouch Design System
 *
 * Variants: default, violet, cyan, lime, magenta
 */
export default function Chip({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const classNames = [
    'chip',
    variant !== 'default' && `chip--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
}
