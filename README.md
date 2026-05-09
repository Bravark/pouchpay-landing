# PouchPay Landing Page

A modern, high-performance landing page for PouchPay - the seamless crypto on/off-ramp platform for Africa. Built with React, Vite, and the Pouch Design System.

## Features

- **🎨 Pouch Design System** - Full implementation of the official design system with:
  - OKLCH color space for vibrant, perceptually uniform colors
  - 4px base grid system with 8px snap
  - Custom typography scale (Sora, Inter, JetBrains Mono)
  - Translucent cards with backdrop blur effects
  - Starfield background with radial glows

- **⚡ Fast & Modern** - Built with Vite for lightning-fast development and optimized production builds

- **📱 Fully Responsive** - Optimized layouts for desktop, tablet, and mobile devices

- **♿ Accessible** - Semantic HTML and ARIA labels for screen reader compatibility

## Design System Highlights

### Colors
- **Surface Stack**: 5-step dark surface system with cool blue tints
- **Accents**: Violet, Cyan, Lime, Magenta with OKLCH color space
- **Semantic**: Primary, Success, Warning, Focus states

### Typography
- **Display**: Sora (600 weight) for headlines and numbers
- **Body**: Inter (400-600 weight) for UI and content
- **Mono**: JetBrains Mono for addresses, hashes, and code

### Components
- **Buttons**: Primary, Secondary, Ghost, and Glow variants
- **Chips**: Colored tags with multiple variants
- **Cards**: Translucent containers with gradient backgrounds
- **Typography Utilities**: Pre-defined text styles

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
pouchpay-landing/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Chip.jsx
│   │   └── Card.jsx
│   ├── sections/          # Landing page sections
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Integration.jsx
│   │   └── CTA.jsx
│   ├── styles/            # Global styles and tokens
│   │   ├── tokens.css     # Design system tokens
│   │   └── global.css     # Global styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── index.html
├── vite.config.js
└── package.json
```

## Design System Documentation

The Pouch Design System is based on these core principles:

1. **Numbers are the hero** - Display typography highlights balances, amounts, and rates
2. **Glow is for confidence** - Accent glow only on primary CTAs and active surfaces
3. **Pill for action, square for data** - Interactive controls use pill shapes
4. **Dark, but not flat** - Surfaces lift through translucency and radial backgrounds

### Using Design Tokens

All design tokens are available as CSS custom properties:

```css
/* Spacing */
padding: var(--s-4);        /* 16px */
gap: var(--s-6);            /* 24px */

/* Colors */
color: var(--fg-1);         /* Primary text */
background: var(--bg-3);    /* Raised surface */

/* Border Radius */
border-radius: var(--r-4);  /* 24px - Cards */
border-radius: var(--r-pill); /* 999px - Buttons */

/* Typography */
font-family: var(--font-display);
font-family: var(--font-body);
font-family: var(--font-mono);
```

### Typography Classes

```jsx
<h1 className="text-display-xl">Display XL</h1>
<h2 className="text-h1">Heading 1</h2>
<p className="text-body">Body text</p>
<span className="text-label">LABEL TEXT</span>
<code className="text-mono">0x1234...5678</code>
```

## Customization

### Theme Variants

Switch between surface tint variants by adding a class to the body:

```html
<!-- Cool (default) -->
<body></body>

<!-- Warm -->
<body class="theme-warm"></body>

<!-- Neutral -->
<body class="theme-neutral"></body>
```

## Performance

- **Fast Builds**: Vite's native ESM for instant HMR
- **Optimized Assets**: Automatic code splitting and minification
- **Modern CSS**: Native CSS custom properties for theming
- **Lightweight**: No heavy CSS frameworks, just custom components

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14.1+

## License

© 2026 PouchPay. All rights reserved.

---

Built with ❤️ using the Pouch Design System
