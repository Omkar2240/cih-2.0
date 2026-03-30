# Campus Innovate Hackathon 2.0 Website

Official event website for **Campus Innovate Hackathon 2.0 (CIH 2.0)** at GHRCEMN.

This site is a modern, animated landing experience built with Next.js App Router and Tailwind CSS, designed to help students:

- Understand the event details and timeline
- Review participation steps and problem statements
- Register their team
- Read official rules and legal/privacy information

## Live Event Context

- Event: Campus Innovate Hackathon 2.0
- Format: 6-hour on-campus hackathon
- Venue: GHRCEMN Auditorium, Nagpur

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- React Icons

## Project Structure

```text
src/
	app/
		page.tsx           # Home page composition
		layout.tsx         # Global layout + metadata
		rules/page.tsx     # Rules page
		legal/page.tsx     # Legal & privacy page
		globals.css        # Theme tokens + global styles
	components/
		sections/          # Landing page sections
		ui/                # Shared UI (Navbar, Starfield, etc.)
public/                # Static assets (logos, hero images, terrain, etc.)
```

## Main Sections on Home Page

- Hero with countdown and primary CTAs
- Event details (date, time, venue, prizes)
- Phase-wise timeline
- How to participate flow
- Inclusion checklist
- Explore more events
- FAQ
- CTA footer with important links

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Open in browser

Visit `http://localhost:3000`

## Available Scripts

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run start  # Run production server
npm run lint   # Run ESLint
```

## Event Content Customization

Most event copy and links are hardcoded in section components. Common updates:

- Hero countdown date and CTA links: `src/components/sections/Hero.tsx`
- Event details cards: `src/components/sections/EventDetails.tsx`
- Participation steps and registration/WhatsApp links: `src/components/sections/ProblemStatements.tsx`
- FAQ content: `src/components/sections/FAQ.tsx`
- Explore more events cards: `src/components/sections/ExploreMoreEvents.tsx`
- Rules page content: `src/app/rules/page.tsx`
- Legal page content: `src/app/legal/page.tsx`

## Design System Notes

Theme tokens and global utilities are defined in `src/app/globals.css`:

- Neon cyan and amber accent palette
- Display and body font variables
- Starfield-like background utility (`.bg-stars`)

## Deployment

This project can be deployed on any platform that supports Next.js (recommended: Vercel).

Basic production flow:

```bash
npm run build
npm run start
```

## Credits

- Website developer: Omkar Ramgirwar
- Organized by: GHRCEMN / CodeCrafters
