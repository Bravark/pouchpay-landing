# Component Reference

Quick reference guide for using the Pouch Design System components.

## Button

```jsx
import Button from './components/Button';

// Variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="glow">Glow Button</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>

// Disabled
<Button disabled>Disabled</Button>
```

### Button Variants

- **primary** - Gradient cyan button with glow (main CTAs)
- **secondary** - Dark button with border (secondary actions)
- **ghost** - Transparent button (tertiary actions)
- **glow** - Violet glowing button (special actions)

## Chip

```jsx
import Chip from './components/Chip';

// Variants
<Chip>Default Chip</Chip>
<Chip variant="violet">Violet Chip</Chip>
<Chip variant="cyan">Cyan Chip</Chip>
<Chip variant="lime">Lime Chip</Chip>
<Chip variant="magenta">Magenta Chip</Chip>
```

### Chip Variants

- **default** - White/gray chip with subtle background
- **violet** - Purple chip for focus/accent states
- **cyan** - Blue chip for primary/active states
- **lime** - Green chip for success states
- **magenta** - Pink chip for beta/special states

## Card

```jsx
import Card from './components/Card';

// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>

// Card with glow
<Card className="card--glow">
  <h3>Featured Card</h3>
  <p>This card has a violet glow effect</p>
</Card>
```

### Card Features

- Translucent gradient background
- 18px backdrop blur
- 24px border radius (adjustable via `--r-4` token)
- Hover lift animation
- Optional glow variant

## Typography Classes

```jsx
// Display styles (for headlines)
<h1 className="text-display-xl">Display XL (72px)</h1>
<h1 className="text-display-l">Display L (56px)</h1>
<h1 className="text-display-m">Display M (40px)</h1>

// Heading styles
<h1 className="text-h1">Heading 1 (32px)</h1>
<h2 className="text-h2">Heading 2 (24px)</h2>
<h3 className="text-h3">Heading 3 (18px)</h3>

// Body styles
<p className="text-body">Body text (15px)</p>
<p className="text-body-s">Small body (13px)</p>

// Label (uppercase)
<span className="text-label">LABEL TEXT (12px)</span>

// Monospace (for code, addresses, hashes)
<code className="text-mono">0x1234...5678</code>
```

## Color Utilities

```jsx
// Foreground colors
<p className="fg-1">Primary text</p>
<p className="fg-2">Secondary text</p>
<p className="fg-3">Tertiary text</p>
<p className="fg-4">Muted/placeholder text</p>

// Accent colors
<p className="text-violet">Violet accent</p>
<p className="text-cyan">Cyan accent</p>
<p className="text-lime">Lime accent</p>
<p className="text-magenta">Magenta accent</p>
<p className="text-primary">Primary color</p>
```

## Layout Utilities

```jsx
// Container (max-width with padding)
<div className="container">
  {/* Content */}
</div>

// Section (with bottom margin)
<section className="section">
  {/* Content */}
</section>
```

## Design Tokens

All tokens are available as CSS custom properties:

### Spacing
```css
--s-1: 4px
--s-2: 8px
--s-3: 12px
--s-4: 16px
--s-5: 20px
--s-6: 24px
--s-8: 32px
--s-10: 40px
--s-12: 56px
--s-16: 80px
```

### Border Radius
```css
--r-1: 8px       /* Small elements */
--r-2: 12px      /* Input fields */
--r-3: 18px      /* Medium surfaces */
--r-4: 24px      /* Cards */
--r-5: 32px      /* Large containers */
--r-pill: 999px  /* Buttons, chips */
```

### Colors

#### Surface Colors
```css
--bg-0: #04060B  /* Page background */
--bg-1: #0A0E18  /* Base surface */
--bg-2: #11172499 /* Card backgrounds (translucent) */
--bg-3: #161D2C  /* Raised surfaces */
--bg-4: #1E2638  /* Input fields */
--line: #1F2738  /* Subtle borders */
--line-strong: #2A3447 /* Prominent borders */
```

#### Foreground Colors
```css
--fg-1: #F4F6FB  /* Primary text */
--fg-2: #B6BFD2  /* Secondary text */
--fg-3: #7B8499  /* Tertiary text */
--fg-4: #4D556A  /* Placeholder text */
```

#### Accent Colors (OKLCH)
```css
--accent-violet: oklch(0.66 0.18 295)
--accent-cyan: oklch(0.78 0.14 210)
--accent-lime: oklch(0.85 0.18 140)
--accent-magenta: oklch(0.70 0.18 340)
```

### Typography
```css
--font-display: 'Sora', system-ui, sans-serif
--font-body: 'Inter', system-ui, sans-serif
--font-mono: 'JetBrains Mono', ui-monospace, monospace
```

### Motion
```css
--dur: 220ms
--ease: cubic-bezier(0.2, 0.8, 0.2, 1)
```

### Shadows & Glows
```css
--shadow-1: 0 1px 0 rgba(255,255,255,.04) inset, 0 8px 24px rgba(0,0,0,.45)
--shadow-2: 0 1px 0 rgba(255,255,255,.05) inset, 0 24px 60px rgba(0,0,0,.55)
--glow-violet: 0 0 60px -8px oklch(0.66 0.18 295 / .55)
--glow-cyan: 0 0 60px -8px oklch(0.78 0.14 210 / .55)
--glow-lime: 0 0 60px -8px oklch(0.85 0.18 140 / .45)
--glow-magenta: 0 0 60px -8px oklch(0.70 0.18 340 / .50)
```

## Best Practices

### Colors
- Use `var(--fg-1)` for primary text, `var(--fg-2)` for secondary
- Use accent colors (cyan, lime, violet) sparingly for emphasis
- Maintain surface hierarchy: bg-0 (background) → bg-4 (inputs)

### Typography
- Display styles for large headlines and numbers
- Sora font for numbers and display text
- Inter for UI elements and body text
- JetBrains Mono for code, addresses, and data

### Spacing
- Use the 4px base grid: multiples of `--s-1` (4px)
- Prefer 8px snap for layout: `--s-2`, `--s-4`, `--s-6`, `--s-8`
- Consistent padding: `--s-8` (32px) for cards

### Interactive Elements
- Pill shapes (`--r-pill`) for buttons and interactive controls
- Square/rectangular for data display and content cards
- Use glow effect sparingly on primary CTAs only

### Motion
- Use `var(--dur)` and `var(--ease)` for consistent transitions
- Add `translateY(1px)` for button active states
- Smooth hover effects with the easing curve

## Example Patterns

### Feature Card
```jsx
<Card>
  <div style={{ fontSize: '48px' }}>🚀</div>
  <h3 className="text-h3">Feature Title</h3>
  <p className="text-body fg-2">
    Description of the feature goes here
  </p>
</Card>
```

### Stat Display
```jsx
<div>
  <div className="text-display-m text-cyan">₦2.5B+</div>
  <div className="text-body-s fg-3">Monthly Volume</div>
</div>
```

### CTA Section
```jsx
<div>
  <h2 className="text-display-m">Call to Action</h2>
  <p className="text-body fg-2">Supporting description</p>
  <div style={{ display: 'flex', gap: 'var(--s-4)', marginTop: 'var(--s-6)' }}>
    <Button variant="primary" size="large">Primary Action</Button>
    <Button variant="secondary" size="large">Secondary Action</Button>
  </div>
</div>
```
