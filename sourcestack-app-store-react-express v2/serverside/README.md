# SourceStack Apps Server

Minimal Express server for the SourceStack Apps project.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run in development (requires nodemon)

```bash
npm run dev
```

3. Start normally

```bash
npm start
```

Health check

Open http://localhost:3000/health — should return `OK`.

Notes

- `PORT` can be set via environment variable. Defaults to `3000`.
- The project includes `cors` and basic error handling.
