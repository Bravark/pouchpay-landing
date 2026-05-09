import './Card.css';

/**
 * Card Component - Pouch Design System
 *
 * A translucent card with gradient background and backdrop blur
 */
export default function Card({
  children,
  className = '',
  ...props
}) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}
