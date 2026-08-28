# thinkydna — Event Studio Website

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — Home (Hero/Intro, About Us, Portfolio, Clients, Testimonials, FAQ)
- `/community-events` — Community Events
- `/work-with-us` — Work with Us (careers)
- `/contact-us` — Contact Us

## Getting started

1. Unzip this folder and open a terminal inside it.
2. Install dependencies:

   ```
   npm install
   ```

3. Run the dev server:

   ```
   npm run dev
   ```

4. Open http://localhost:3000

## Build for production

```
npm run build
npm run start
```

## Project structure

```
app/                     Routes (App Router)
  page.tsx               Home page
  community-events/      Community Events page
  work-with-us/          Work with Us page
  contact-us/            Contact Us page
  layout.tsx             Root layout (header/footer, fonts, metadata)
  globals.css            Tailwind + design tokens (buttons, cards, etc.)
components/
  Header.tsx, Footer.tsx, Logo.tsx, SectionHeading.tsx, HelixDivider.tsx
  ContactForm.tsx         Contact form (client component)
  sections/               Hero, About, Portfolio, Clients, Testimonials, FAQ, CTA
lib/
  content.ts              All site copy/data in one place — edit here to update content
tailwind.config.ts        Color tokens (brand gradient, grays) and font stack
```

## Editing content

Almost all text (portfolio items, testimonials, FAQ, clients, event dates, job roles)
lives in `lib/content.ts` — edit that file instead of hunting through components.

## Colors

Base palette is white/gray (`gray.50`–`gray.900` in `tailwind.config.ts`), with a
signature purple → red gradient (`bg-brand-gradient`) pulled from the thinkydna logo,
used for primary buttons, the hero background, and accent details.
