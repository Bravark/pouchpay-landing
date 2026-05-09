# Deployment Guide - PouchPay Landing Page

## Built Files Location
The production build is in: `pouchpay-landing/dist/`

## Caddy Configuration

Add this block to your existing Caddyfile on the production server:

```caddy
pouch.finance {
    # Serve the static files
    root * /path/to/Liquifia/pouchpay-landing/dist
    file_server

    # Enable gzip compression
    encode gzip

    # SPA routing - redirect all non-file requests to index.html
    try_files {path} /index.html

    # Security headers
    header {
        # Enable HSTS
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
        # Prevent clickjacking
        X-Frame-Options "SAMEORIGIN"
        # Prevent MIME sniffing
        X-Content-Type-Options "nosniff"
        # Enable XSS protection
        X-XSS-Protection "1; mode=block"
        # Referrer policy
        Referrer-Policy "strict-origin-when-cross-origin"
    }

    # Cache static assets
    @static {
        path *.js *.css *.png *.jpg *.jpeg *.gif *.ico *.svg *.woff *.woff2
    }
    header @static Cache-Control "public, max-age=31536000, immutable"

    # Don't cache index.html
    @html {
        path *.html
    }
    header @html Cache-Control "no-cache, no-store, must-revalidate"
}

www.pouch.finance {
    redir https://pouch.finance{uri} permanent
}
```

## Deployment Steps

1. **On production server**, pull the latest code:
   ```bash
   cd /path/to/Liquifia
   git pull origin main
   ```

2. **Build the landing page** (if needed):
   ```bash
   cd pouchpay-landing
   npm install
   npm run build
   ```

3. **Update Caddyfile**:
   - Add the configuration block above to your existing Caddyfile
   - Update `/path/to/Liquifia/pouchpay-landing/dist` to match your actual server path

4. **Reload Caddy**:
   ```bash
   sudo caddy reload --config /path/to/your/Caddyfile
   ```
   Or if using systemd:
   ```bash
   sudo systemctl reload caddy
   ```

5. **Test the deployment**:
   ```bash
   curl -I https://pouch.finance
   ```

## Notes

- The landing page is a Single Page Application (SPA) that uses hash routing
- All routes (#features, #privacy, #terms) are handled client-side
- Caddy will automatically handle HTTPS certificates via Let's Encrypt
- The configuration includes www → non-www redirect
- Static assets are cached for 1 year, HTML is not cached

## Build Output

```
dist/
├── assets/
│   ├── pouchLogo-CVfBCH9k.png (20.63 kB)
│   ├── index-CQ0KJien.css (20.63 kB)
│   └── index-DmpoRlKG.js (442.39 kB)
└── index.html (2.79 kB)
```

Total size: ~484 kB
