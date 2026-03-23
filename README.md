# Minimal Website Starter

This project is a plain static site. You can open `index.html` directly in a browser, or deploy it with any static host.

## Routes

- `/`: landing page
- `/privacy/`: privacy policy page
- `/support/`: support page
- `/verify/`: mentor certification verification page

## Files

- `index.html`: landing page
- `privacy/index.html`: privacy policy page
- `support/index.html`: support page
- `verify/index.html`: certification verification page
- `verify/credentials.json`: credential records
- `verify/verify.js`: credential lookup logic
- `styles.css`: shared styling for all pages

## Fastest way to publish

These are good beginner-friendly options for a custom domain:

1. GitHub Pages
2. Netlify
3. Vercel
4. Cloudflare Pages

All four can host this exact site with no framework setup.

## Connecting your custom domain

The hosting provider will usually ask you to add one of these DNS records at your domain registrar:

- `A` record for the root domain, such as `example.com`
- `CNAME` record for `www.example.com`

The exact values depend on the host you choose. Once the site is deployed, add the domain in the host's dashboard, then copy the DNS records they provide into your registrar's DNS settings.

## What to customize next

- Replace the homepage copy with your final Atlos messaging
- Paste your Carrd privacy policy into `privacy/index.html`
- Paste your Carrd support content into `support/index.html`
- Replace or expand the credential records in `verify/credentials.json`
- Add your real domain once hosting is set up
