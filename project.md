# Overview

This project demonstrates a **full-stack media search and retrieval system** powered by **Elasticsearch**, offering a responsive and optimized user interface for browsing media content.

It includes:

- **Backend Media Service** – Built in **Node.js + Express.js** for media search and retrieval.
- **Frontend Client** – Built in **Next.js** for a fast, SEO-friendly, and user-focused experience.

---

## Live Demo & Code

### Backend Media Service (Node.js + Express.js)

- **Search Endpoint:** [https://media-service-9v3w.onrender.com/api/media/search](https://media-service-9v3w.onrender.com/api/media/search)
- **Health Endpoint:** [https://media-service-9v3w.onrender.com/health](https://media-service-9v3w.onrender.com/health)
- **GitHub Repo:** [https://github.com/prakashshuklahub/Media-Service](https://github.com/prakashshuklahub/Media-Service)

### Frontend Client (Next.js)

- **Live App:** [https://frontend-client-ecru-five.vercel.app/](https://frontend-client-ecru-five.vercel.app/)
- **GitHub Repo:** [https://github.com/prakashshuklahub/Frontend-Client](https://github.com/prakashshuklahub/Frontend-Client)

---

## Architecture

### Frontend (Next.js + TypeScript + SCSS Modules + Storybook)

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** SCSS Modules (Sass) with custom mixins, partials and consistent theming (colors, fonts, spacing)
- **State Management:** React Query (@tanstack/react-query) for caching, deduplicating, and optimizing network calls
- **UI Development & Documentation:** Storybook for isolated UI component development
- **Testing:** Vitest and React Testing Library

**Key Features:**

- Responsive search interface with query & date filtering
- Loading skeletons to improve UX
- Lazy & eager image loading strategy
- Accessible and semantic HTML structure for better SEO & usability
- Low-level reusable components (e.g., buttons) for consistent UI and maintainability
- Lighthouse Performance Score: 90%
- Image optimization via Next.js <Image> component
- ESLint for catching issues during development

---

### Backend (Node.js + Express.js + TypeScript)

- **Framework:** Express.js with TypeScript

**Endpoints:**

- `GET /api/media/search` → Search media by query & filters
- `GET /health` → Health check endpoint

**Key Features:**

- Data normalization & validation before serving results
- Layered architecture: service → repository → controller for scalability

---

## Testing Strategy

**Backend:**

- Unit tests for media service, controller and repository

**Frontend:**

- Unit tests for **each** UI component

---

## Problem Identification & Solution

**Problem:**
Large `suchtext` fields contain repeated metadata & copyright text, inflating index size and slowing queries.
Relying solely on `subctext` is inaccurate due to missing keywords/tags.

**Solution:**

- Pre-process text: remove boilerplate, deduplicate, normalize
- Extract keywords and store in dedicated fields

---

## Monitoring

- Health-check endpoint: `/health`

---

## Trade-offs & Decisions

- **Next.js vs React:** Chose Next.js for SSR, built-in Image optimization, SEO improvements, and API route flexibility
- **SCSS vs Tailwind:** SCSS chosen for granular control, partial imports, and mixins for consistent theming
- **TypeScript:** Compile-time type safety and reduced runtime errors
- **React Benefits:** Virtual DOM for efficient updates, reusable components, and predictable rendering

---

## Additional Enhancements (Future Scope)

- Playwright E2E testing for search & filter
- Mixpanel integration for analytics
- Internationalization (i18n) support
- Backend logging enhancements
- Sentry integration for error monitoring
- Swagger API documentation
- Redis caching for faster repeated queries
- Cursor-based pagination for more efficient and scalable data navigation, especially in search results
