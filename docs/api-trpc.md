# tRPC API

This starter kit uses **tRPC** to implement a fully type-safe API layer between the frontend and backend.

tRPC allows you to define API procedures on the server and call them directly from the client with **automatic type inference**, eliminating the need for manual API schemas or client code generation.

---

# Why tRPC?

tRPC provides several advantages for full-stack TypeScript applications:

* **End-to-end type safety**
* **No REST or GraphQL schema required**
* **Automatic TypeScript inference**
* **Simpler API layer**

Because both the client and server share the same TypeScript types, the API remains **fully synchronized**.

---

# API Architecture

The tRPC layer sits between the frontend and backend logic.

```
React Components
      │
      ▼
tRPC Client Hooks
      │
      ▼
tRPC Routers
      │
      ▼
Server Logic
      │
      ▼
Prisma ORM
      │
      ▼
PostgreSQL
```

---

# File Locations

tRPC is split into **server and client configuration**.

Server files:

```
src/server/api/
├ root.ts
└ routers/
```

Client configuration:

```
src/trpc/
├ client.ts
└ react.ts
```

---

# Creating a Router

Routers define groups of related procedures.

Example router:

```ts
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { z } from "zod"

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany()
  }),
})
```

Routers are usually placed inside:

```
src/server/api/routers/
```

Example structure:

```
routers/
├ user.ts
├ project.ts
└ organization.ts
```

---

# Registering the Router

After creating a router, it must be registered in the **root router**.

File:

```
src/server/api/root.ts
```

Example:

```ts
import { createTRPCRouter } from "./trpc"
import { projectRouter } from "./routers/project"

export const appRouter = createTRPCRouter({
  project: projectRouter,
})
```

This exposes the router to the frontend.

---

# Procedure Types

The starter kit usually defines two procedure types.

## publicProcedure

Accessible by any user.

Example:

```ts
publicProcedure.query(() => {
  return "Hello world"
})
```

---

## protectedProcedure

Requires authentication.

Example:

```ts
protectedProcedure.query(({ ctx }) => {
  return ctx.session.user
})
```

If the user is not authenticated, the request will fail.

---

# Input Validation

tRPC uses **Zod** for input validation.

Example:

```ts
import { z } from "zod"

publicProcedure
  .input(
    z.object({
      name: z.string(),
      price: z.number(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    return ctx.db.product.create({
      data: input,
    })
  })
```

Validation happens automatically before the procedure executes.

---

# Query vs Mutation

tRPC distinguishes between **queries** and **mutations**.

## Query

Used for fetching data.

Example:

```ts
getProjects: publicProcedure.query(async ({ ctx }) => {
  return ctx.db.project.findMany()
})
```

Queries are typically cached on the client.

---

## Mutation

Used for modifying data.

Example:

```ts
createProject: protectedProcedure
  .input(z.object({ name: z.string() }))
  .mutation(async ({ ctx, input }) => {
    return ctx.db.project.create({
      data: input,
    })
  })
```

Mutations are used for:

* creating data
* updating data
* deleting data

---

# Using tRPC in React

The frontend interacts with the API using **typed hooks**.

Example query:

```tsx
const { data, isLoading } = api.project.getAll.useQuery()
```

Example mutation:

```tsx
const createProject = api.project.create.useMutation()

createProject.mutate({
  name: "New Project",
})
```

All inputs and outputs are **fully typed automatically**.

---

# Example Full Flow

Example of creating a project.

### Step 1 — Create the router

```ts
createProject: protectedProcedure
  .input(z.object({ name: z.string() }))
  .mutation(async ({ ctx, input }) => {
    return ctx.db.project.create({
      data: input,
    })
  })
```

---

### Step 2 — Use the mutation in the frontend

```tsx
const mutation = api.project.createProject.useMutation()

mutation.mutate({
  name: "My Project",
})
```

---

### Step 3 — Data stored via Prisma

```
React Component
      │
      ▼
tRPC Mutation
      │
      ▼
Router Logic
      │
      ▼
Prisma
      │
      ▼
Database
```

---

# Context (`ctx`)

Each procedure receives a **context object**.

Example:

```ts
async ({ ctx })
```

Typical context properties:

```
ctx.db        → Prisma client
ctx.session   → Auth.js session
ctx.user      → authenticated user
```

This allows procedures to access database and authentication.

---

# Error Handling

tRPC automatically returns structured errors.

Example:

```ts
throw new Error("Project not found")
```

Errors are sent to the client and can be handled in React.

Example:

```tsx
if (mutation.error) {
  console.error(mutation.error.message)
}
```

---

# Best Practices

Recommended guidelines when creating tRPC routers.

### Keep routers focused

Group related procedures together.

Example:

```
projectRouter
userRouter
organizationRouter
```

---

### Validate inputs with Zod

Always validate external inputs.

---

### Use protectedProcedure for sensitive operations

Any action that modifies user data should require authentication.

---

### Keep business logic in the server

Avoid placing business logic in React components.

---

# Next Steps

Continue exploring the rest of the system:

* `background-jobs.md` → asynchronous workflows using Inngest
* `emails.md` → transactional email system
* `database.md` → working with Prisma
* `deployment.md` → deploying the application
