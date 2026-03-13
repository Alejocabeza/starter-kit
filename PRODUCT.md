# PRODUCT.md - Starter Kit SaaS (Production Ready)

## 1. Vision & Core Value

This is a "Battery-Included" SaaS Starter Kit designed to cover the **80% of critical production needs** out of the box. It moves beyond a simple tech stack demo to provide a robust, scalable foundation for real-world applications.

## 2. Technical Architecture (The "T3+" Stack)

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 + DaisyUI v5 (Component Primitives)
- **Database:** PostgreSQL (Containerized via Docker)
- **ORM:** Prisma (Typed Schema)
- **API:** tRPC v11 (End-to-end type safety)
- **Auth:** Auth.js (NextAuth v5) with RBAC (Role-Based Access Control)
- **Testing:** Vitest (Unit/Integration) + Playwright (E2E)
- **Storage:** Uploadthing (S3-compatible abstraction)

## 3. Core Features (Implemented)

### 3.1 Infrastructure & DevOps

- **Dockerized Database:** `docker-compose.yml` for instant local setup.
- **Testing Suite:** Vitest configured with `@/` alias support. `npm test` runs unit tests.

### 3.2 Security & Access Control

- **RBAC:** Native `Role` enum (`USER` | `ADMIN`) in database.
- **Session Injection:** User role available in `session.user.role`.
- **Protected Procedures:**
  - `publicProcedure`: Open access.
  - `protectedProcedure`: Requires login.
  - `adminProcedure`: Requires `role === "ADMIN"`.

### 3.3 Design System (UI Primitives)

Located in `src/components/ui/`:

- **Button:** Wraps DaisyUI with variant/size props and loading state.
- **Input:** ForwardRef enabled for `react-hook-form` integration.
- **FileUploader:** Drag-and-drop file upload component.

### 3.4 Data & Storage

- **Uploadthing Integration:** API route and client components configured.

## 4. Development Workflow

1. **Start Database:** `docker compose up -d`
2. **Run Migrations:** `npx prisma migrate dev`
3. **Start Dev Server:** `npm run dev`
4. **Run Tests:** `npm test`

## 5. Directory Structure

```
src/
├── app/
│   ├── api/uploadthing/    # File upload routes
│   └── ...
├── components/
│   └── ui/                 # Shared primitive components
├── lib/
│   ├── utils.ts            # Class merging (cn)
│   └── uploadthing.ts      # Upload helper
├── server/
│   ├── api/trpc.ts         # tRPC procedures (adminProcedure)
│   ├── auth/               # NextAuth config
│   └── db.ts               # Prisma client
```
