## Welcome

This is my portfolio site. You can view it at [macbeagan.me](https://macbeagan.me/).

Built with Next.js (App Router), TypeScript and Tailwind CSS. The contact form uses a Server Action that sends mail via [Resend](https://resend.com).

Please feel free to fork and play around if you're interested.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the Resend values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script              | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start the dev server                  |
| `npm run build`     | Production build                      |
| `npm run lint`      | ESLint                                |
| `npm run typecheck` | Generate Next route types and run tsc |
| `npm run format`    | Prettier                              |

Site content (bio, projects, stack, socials) lives in `content/site.ts`.

## Environment variables

| Name                 | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| `RESEND_API_KEY`     | Resend API key                                                  |
| `CONTACT_TO_EMAIL`   | Where contact form messages are delivered                       |
| `CONTACT_FROM_EMAIL` | Sender on a Resend-verified domain, e.g. `contact@macbeagan.me` |

## Licence

MIT © P. Cormac Beagan
