### Frontend Client

A Next.js app for searching and displaying images from a media service.

### Quick start

```bash
# Install deps
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Configuration

- API base URL defaults to the hosted service:
  - `https://media-service-9v3w.onrender.com/api`

### API used by the app

- Endpoint: `GET /media/search`
- Query params:
  - `q` (string): search text
  - `limit` (number): page size (default 30 in app)
  - `offset` (number): pagination offset
  - `dateFrom` (YYYY-MM-DD)
  - `dateTo` (YYYY-MM-DD)
  - `photographer` (string, optional)

Example request:

```bash
curl "https://media-service-9v3w.onrender.com/api/media/search?q=cricket&limit=30&offset=0"
```

### Images configuration

- Remote images are allowed from `www.imago-images.de` (see `next.config.ts`).

### Tech stack

- Next.js (App Router)
- TypeScript
- React Query (@tanstack/react-query)
- SCSS Modules (BEM naming)

### Scripts

- `npm run dev`: start dev server
- `npm run build`: build production bundle
- `npm run start`: run production server
