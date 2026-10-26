# Matt Brooks Store (skeleton)

A free build by family for Matt Brooks: a website where people go from his
Instagram reels straight to buying. Custom videos and merch, one professional
looking page.

## What is live in this skeleton

- Hero: the reels-to-store pitch.
- Custom videos section: one real product, the $50 custom video. The
  checkout button is scaffolded but DISABLED, because Matt's Stripe account
  is not connected yet. No payment is taken on this page.
- Merch sections: honest category shells only (stickers, posters, tees,
  hoodies, hats, tumblers). Each one says "Products loading soon". No prices,
  no fake listings, no invented products.
- Instagram section: a placeholder link slot until Matt's real handle is
  added.
- About and footer sections.

## What is NOT here yet (placeholders)

1. Matt's Instagram handle - fill `instagramHandle` in `config.js`.
2. Matt's Stripe keys / checkout link - fill `stripeCheckoutUrl` in
   `config.js` once Matt's own Stripe account is connected. Stripe keys go
   in via environment variables later (secure vault), never committed.
3. All print-on-demand product data (product IDs, prices, variants) -
   merch stays as category shells until the POD catalog numbers land.
4. The Printful webhook backend - phase 2. The order flow will be: customer
   pays via Stripe, then AFTER payment confirms via webhook a backend
   forwards the order to Printful to print and ship. That backend is not
   part of this skeleton.
5. Plush toys - phase 2 only. No one-off plush on standard Printful, so no
   plush products appear here.
6. Any revenue split - Crishtian has not answered Matt's revenue-share
   "cut" offer, so no money terms or splits appear anywhere on the site.

## Money structure

Matt's OWN Stripe account owns the money and the taxes. Crishtian holds the
API keys and manages the tech. Crishtian's Stripe is fallback only and is
not wired into anything here.

## This build is free

Crishtian already told Matt this site is free. No charge to Matt appears
anywhere in this repo or on the site.

## Deploy on Vercel (later, by Crishtian)

This repo is built to import straight into Vercel. No GitHub Pages is
enabled on purpose: Vercel is the deploy target.

1. In Vercel, choose "Add New" then "Project".
2. Import this repo (`CrisShadowDev/matt-brooks-store`).
3. Framework preset: leave it as a static site (no framework, no build
   command, output directory is the repo root).
4. Deploy. The site goes live on its Vercel URL.
5. Optional: add a custom domain in Vercel later (about $12/year for the
   domain itself, nothing else).

## Local preview

Open `index.html` in a browser, or serve the folder with any static server.
No build step, no dependencies, no cost.
