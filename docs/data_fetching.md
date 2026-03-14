# Data Fetching Architecture: tRPC Only

This document defines the strict data fetching policy for the `starter-kit-ts` project.

## Core Principle

**All data fetching and mutations must go through the tRPC layer.**
Direct usage of `prisma` in React Components or ad-hoc Server Actions (`'use server'`) for data fetching is **prohibited**.

This ensures:

1.  **Single Source of Truth:** Validation, Authorization, and Business Logic live in one place (`src/server/api`).
2.  **Type Safety:** End-to-end typing from database to UI.
3.  **Performance:** Leveraging React Query caching (Client) and Request Memoization (Server).

---

## 1. Fetching in Server Components (RSC)

**Pattern:** Direct Caller via `src/trpc/server.ts`

When you need data in a `page.tsx` or `layout.tsx`, use the `api` object from `src/trpc/server`. This executes the procedure directly on the server without an HTTP round-trip, but reuses the same logic.

```tsx
// src/app/features/dashboard/page.tsx
import { api } from "@/trpc/server";

export default async function DashboardPage() {
  // ✅ CORRECT: Uses tRPC caller
  const stats = await api.dashboard.getStats();

  return (
    <div>
      <h1>Stats: {stats.totalUsers}</h1>
    </div>
  );
}
```

```tsx
// ❌ INCORRECT: Direct Prisma usage
import { db } from "@/server/db";

export default async function DashboardPage() {
  const stats = await db.user.count(); // ⛔ VIOLATION
  return <div>{stats}</div>;
}
```

---

## 2. Fetching in Client Components

**Pattern:** React Query Hooks via `src/trpc/react.tsx`

When you need data in an interactive component (`"use client"`), use the `api` hook.

```tsx
// src/app/features/dashboard/components/UserList.tsx
"use client";

import { api } from "@/trpc/react";

export function UserList() {
  // ✅ CORRECT: Uses tRPC hook
  const { data: users, isLoading } = api.users.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 3. Mutations (Form Actions)

**Pattern:** `useMutation` via `src/trpc/react.tsx`

Do not create `async function myAction() { 'use server' ... }`. Define a `mutation` in your tRPC router and call it from the client.

```tsx
// src/app/features/posts/CreatePost.tsx
"use client";

import { api } from "@/trpc/react";
import { useState } from "react";

export function CreatePost() {
  const [name, setName] = useState("");

  // ✅ CORRECT: Uses tRPC mutation
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      // Invalidate queries or redirect
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name });
      }}
    >
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button disabled={createPost.isPending}>
        {createPost.isPending ? "Saving..." : "Create"}
      </button>
    </form>
  );
}
```

---

## 4. Prefetching (Hydration)

**Pattern:** `HydrateClient` via `src/trpc/server.ts`

If you want to fetch data on the server but pass it to a Client Component as initial data (to avoid a loading spinner), use `HydrateClient`.

```tsx
// src/app/features/posts/page.tsx
import { api, HydrateClient } from "@/trpc/server";
import { PostList } from "./PostList"; // Client Component

export default async function PostsPage() {
  // 1. Prefetch on server
  void api.post.getLatest.prefetch();

  return (
    // 2. Dehydrate state to client
    <HydrateClient>
      <PostList />
    </HydrateClient>
  );
}
```
