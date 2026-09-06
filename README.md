# Daily Verse

A tiny web app that shows a random Bible verse at the click of a button.

## Design notes

- **No network calls.** Verses are bundled locally (`lib/verses.ts`), so the app
  works offline and never transmits anything about the user.
- **Public-domain text.** Verses are from the [World English Bible](https://worldenglish.bible/)
  (WEB), which is in the public domain — safe to ship and distribute.
- **Locked-down headers.** A restrictive Content-Security-Policy (see
  `next.config.mjs`) blocks third-party scripts, framing, and outbound
  connections.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the dev server            |
| `npm run build` | Production build                |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Lint                            |
| `npm test`      | Run unit tests                  |
