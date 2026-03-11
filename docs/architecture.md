# Architecture

This document explains the overall architecture of the starter kit and how the different parts of the system interact.

The goal of this architecture is to provide:

* **End-to-end type safety**
* **Clear separation between frontend and backend logic**
* **Scalable background processing**
* **A clean foundation for SaaS applications**

---

# Architecture Overview

The project follows a **full-stack TypeScript architecture** built on top of the T3 stack.

Main technologies used:

* **Next.js (App Router)** → UI and routing
* **tRPC** → Type-safe API layer
* **Prisma** → Database ORM
* **PostgreSQL** → Database
* **Auth.js** → Authentication
* **Inngest** → Background jobs and event-driven workflows
* **Resend + React Email** → Transactional emails
* **next-intl** → Internationalization

---

# High-Level Architecture

```id="y3gq6e"
Client (Browser)
      │
      ▼
Next.js App Router
      │
      ▼
tRPC API Layer
      │
      ▼
Server Logic
      │
      ▼
Prisma ORM
      │
      ▼
PostgreSQL Database
```

Background jobs and asynchronous workflows are handled separately by **Inngest**.

---

# Folder Structure

The project is organized to clearly separate responsibilities.

```id="09m3z1"
src/
├ app/
├ components/
├ emails/
├ inngest/
├ lib/
├ server/
├ styles/
└ trpc/
```

Below is a description of each main directory.

---

# app/

The `app/` directory contains the **Next.js App Router**.

Responsibilities:

* Page routes
* Layouts
* Server Components
* Client Components

Example structure:

```id="d71pp7"
app/
├ layout.tsx
├ page.tsx
├ dashboard/
│  ├ page.tsx
│  └ layout.tsx
```

Next.js handles routing automatically based on the file system.

---

# components/

Reusable **UI components** used across the application.

Examples:

* form components
* layout components
* UI elements

Example:

```id="ed0lkn"
components/
├ ui/
├ forms/
└ navigation/
```

Components should be **small, reusable, and composable**.

---

# emails/

Contains **React Email templates** used for transactional emails.

Example:

```id="1tkn1m"
emails/
├ WelcomeEmail.tsx
├ ResetPasswordEmail.tsx
```

These templates are rendered and sent using **Resend**.

---

# inngest/

Contains **background jobs and event-driven functions**.

Example:

```id="7l9bwo"
inngest/
├ client.ts
├ index.ts
└ functions/
   ├ send-welcome-email.ts
   └ process-payment.ts
```

Responsibilities:

* background jobs
* scheduled tasks
* event-driven workflows

These functions run outside the normal request-response lifecycle.

---

# lib/

Shared utilities and service integrations.

Examples:

```id="0v1bgb"
lib/
├ email.ts
├ utils.ts
├ resend.ts
```

This folder should contain **logic that is reused across the application**.

---

# server/

The `server/` directory contains backend-specific logic.

Example:

```id="d4au50"
server/
├ api/
│  ├ root.ts
│  └ routers/
│     ├ user.ts
│     └ project.ts
│
├ auth.ts
└ db.ts
```

Responsibilities:

* tRPC routers
* authentication configuration
* Prisma database client

This folder should **never contain UI logic**.

---

# trpc/

Contains the **tRPC client configuration** used by the frontend.

Example:

```id="v4df8m"
trpc/
├ client.ts
└ react.ts
```

Responsibilities:

* connecting the frontend to the tRPC API
* providing typed API hooks

---

# Data Flow

Typical request flow:

```id="q6l1cz"
User Action
   │
   ▼
React Component
   │
   ▼
tRPC Client Hook
   │
   ▼
tRPC Router
   │
   ▼
Server Logic
   │
   ▼
Prisma
   │
   ▼
PostgreSQL
```

All API interactions remain **fully type-safe from frontend to database**.

---

# Background Processing

Long-running or asynchronous operations are handled using **Inngest**.

Example tasks:

* sending emails
* processing payments
* generating reports
* scheduled tasks

Instead of blocking an API request, an **event is emitted**, and Inngest processes it asynchronously.

---

# Email System

Emails are implemented using:

* **React Email** → templates
* **Resend** → email delivery

Flow:

```id="g5t3oz"
Application Event
      │
      ▼
Email Template (React Email)
      │
      ▼
sendEmail Utility
      │
      ▼
Resend API
      │
      ▼
User Inbox
```

---

# Internationalization

Internationalization is handled using **next-intl**.

Translations are stored in:

```id="xol2y4"
messages/
├ en.json
└ es.json
```

Components can access translations using:

* `

