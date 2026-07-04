# MCAN Ondo State Chapter — Website

A React + TypeScript + Tailwind CSS (v4) rebuild of the MCAN Ondo State Chapter website
(originally static HTML/CSS/JS at github.com/Superpen-Dev/mcanondostate.github.io).

## Stack

- **Vite** — build tool / dev server
- **React 19 + TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v6** — client-side routing across 7 pages
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  assets/         images.ts (central image map) + original image files
  components/     Header, Footer, Hero, PageHeader, SectionHeading,
                  ProgramsGrid, UpcomingEventsSection, PastEventsGallery,
                  PublicationsTeaser, AmeersAccordion, VerseCard,
                  MarqueeBanner, WhatsAppButton, Layout, ScrollToTop
  data/           content.ts — nav links, LGA Ameer contacts, programs,
                  events, articles, poems, stories (single source of truth)
  pages/          Home, About, Events, Publications, Donate,
                  Registration, Contact, NotFound
public/
  mcanmosqueshelp.mp4   (donation page video, served statically)
```

## Notes on the rebuild

- **Design**: deep emerald green + brass gold palette (NYSC/Islamic green with a
  manuscript-gold accent), Fraunces for display type, Work Sans for body text,
  an eight-pointed star ("khatam") motif used as a signature divider, and
  arch-topped cards echoing mosque architecture.
- **Forms**: the Registration and Contact forms POST to the same Google Apps
  Script endpoints as the original site, so your existing Sheets-based backend
  keeps working with no changes needed.
- **Executives section**: the original had the same placeholder executive
  repeated 9×. This rebuild shows the one real entry (Toheeb Ishola Alli) —
  add more objects to the `executives` array in `src/data/content.ts` as new
  officers are confirmed.
- **Content**: all copy (mission/vision/history, programs, articles, poems,
  stories, LGA Ameer phone/email list) was carried over from the original
  HTML into `src/data/content.ts` so it's easy to edit without touching
  component code.
- **nazaa.pdf**: not linked from any page in the original site, so it wasn't
  carried over. Drop it in `public/` and link to `/nazaa.pdf` if you need it.

## Deploying

This is a static site — `npm run build` outputs a `dist/` folder you can
deploy to GitHub Pages, Netlify, Vercel, or any static host. For GitHub Pages
on `Superpen-Dev/mcanondostate.github.io`, you can build and push the `dist/`
contents to the root of the repo (or set up a GitHub Action to do this on
every push to `main`).
