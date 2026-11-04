# BooklyPro

Interactive booking experience for independent professionals and small service businesses. The demo includes service, professional, date and time selection with a simulated confirmation flow.

## Tech stack

- React 19
- TypeScript
- Vite
- Lucide Icons

## Run locally

```bash
npm install
npm run dev
```

All people, services and appointments shown are fictional demo content.

## Architecture

The project follows a feature-driven structure:

- `src/app` — application composition and global styles
- `src/features/booking` — booking state, data and confirmation flow
- `src/features/services` — service selection UI
- `src/features/team` — professional selection UI
- `src/shared` — reusable site-level components
