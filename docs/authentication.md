# Authentication

This starter kit uses **Auth.js (NextAuth v5)** to handle authentication.

Auth.js provides a flexible authentication system that supports:

* OAuth providers (Google, GitHub, etc.)
* Email authentication
* Credentials-based login
* Session management
* Secure authentication flows

---

# Authentication Overview

Authentication is implemented using **Auth.js** and integrated into the backend.

Main components:

* **Auth.js** → authentication framework
* **Prisma Adapter** → database persistence
* **Next.js App Router** → session access in server components

---

# Configuration Location

Auth configuration lives in:

```id="pfswy9"
src/server/auth.ts
```

This file is responsible for:

* configuring providers
* defining session behavior
* integrating Prisma
* exporting authentication utilities

Example structure:

```ts id="rts24q"
import NextAuth from "next-auth"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    // providers here
  ],
})
```

---

# Database Integration

Auth.js stores authentication data in the database using the **Prisma Adapter**.

Typical tables include:

* `User`
* `Account`
* `Session`
* `VerificationToken`

These models are defined in:

```id="inl8ok"
prisma/schema.prisma
```

Prisma automatically handles persistence.

---

# Accessing the Session

You can access the authenticated user session both on the **server** and **client**.

---

# Server Components

Use the `auth()` helper.

Example:

```ts id="qlowfw"
import { auth } from "@/server/auth"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated</div>
  }

  return <div>Welcome {session.user?.name}</div>
}
```

---

# Client Components

Use the `useSession` hook.

Example:

```tsx id="5ipwp8"
"use client"

import { useSession } from "next-auth/react"

export function UserProfile() {
```
