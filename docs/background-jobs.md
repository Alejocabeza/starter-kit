# Background Jobs

This starter kit uses **Inngest** to handle background jobs and event-driven workflows.

Inngest allows you to run tasks **asynchronously**, outside the normal request-response cycle.

Typical use cases include:

* sending emails
* processing payments
* generating reports
* scheduled tasks
* long-running workflows

---

# Why Use Background Jobs?

Some operations should not run during a normal API request because they may:

* take too long
* block the user request
* fail independently of the request

Instead, the application emits an **event**, and a background function processes the task.

Example flow:

```id="xkgm54"
User Action
    │
    ▼
API Mutation
    │
    ▼
Emit Event
    │
    ▼
Inngest Function
    │
    ▼
Background Processing
```

---

# Inngest Architecture

Inngest works using **events and functions**.

```id="9ff0oz"
Application Event
       │
       ▼
Inngest Event System
       │
       ▼
Inngest Function
       │
       ▼
Background Execution
```

Functions can also trigger **other events**, allowing complex workflows.

---

# File Structure

Inngest code lives inside:

```id="zzgkdc"
src/inngest/
```

Example structure:

```id="16j5mw"
src/inngest/
├ client.ts
├ index.ts
└ functions/
   ├ send-welcome-email.ts
   ├ process-payment.ts
   └ generate-report.ts
```

---

# Creating an Inngest Function

Functions are created using `inngest.createFunction`.

Example:

```ts id="9j3rb0"
import { inngest } from "../client"

export const sendWelcomeEmail = inngest.createFunction(
  { id: "send-welcome-email" },
  { event: "user/created" },
  async ({ event }) => {
    const user = event.data

    console.log("Sending welcome email to", user.email)
  }
)
```

This function will run whenever the **`user/created` event** is triggered.

---

# Registering Functions

All functions must be exported from:

```id="0l9ehl"
src/inngest/index.ts
```

Example:

```ts id="ycyg33"
import { sendWelcomeEmail } from "./functions/send-welcome-email"

export const functions = [
  sendWelcomeEmail
]
```

This allows the Inngest server to discover all functions.

---

# Sending Events

Events can be emitted from anywhere in the application.

Example:

```ts id="h92z08"
import { inngest } from "@/inngest/client"

await inngest.send({
  name: "user/created",
  data: {
    id: user.id,
    email: user.email,
  },
})
```

Once emitted, the corresponding Inngest function will run asynchronously.

---

# Example: Sending Welcome Email

Step 1 — Emit event after user creation:

```ts id="uqpb0p"
await inngest.send({
  name: "user/created",
  data: user
})
```

---

Step 2 — Create background function:

```ts id="d2ng10"
export const sendWelcomeEmail = inngest.createFunction(
  { id: "send-welcome-email" },
  { event: "user/created" },
  async ({ event }) => {
    const user = event.data

    await sendEmail({
      to: user.email,
      subject: "Welcome!",
    })
  }
)
```

---

Step 3 — Function runs asynchronously.

```id="ivov8i"
User Created
      │
      ▼
Emit Event
      │
      ▼
Inngest Function
      │
      ▼
Send Email
```

---

# Running Inngest Locally

To run the Inngest development server:

```bash id="qrgm9p"
npx inngest-cli@latest dev
```

This starts:

* local event processing
* workflow execution
* debugging tools

Dashboard URL:

```id="re4pmt"
http://localhost:8288
```

---

# Inngest Dashboard

The local dashboard allows you to:

* inspect events
* replay workflows
* debug functions
* monitor job execution

This makes debugging background workflows much easier.

---

# Scheduled Jobs (Cron)

Inngest can also run **scheduled tasks**.

Example:

```ts id="xv0m36"
export const dailyReport = inngest.createFunction(
  { id: "daily-report" },
  { cron: "0 0 * * *" },
  async () => {
    console.log("Generating daily report")
  }
)
```

This job runs **every day at midnight**.

---

# Retry Handling

If a function fails, Inngest automatically retries the job.

Benefits:

* automatic retry logic
* fault tolerance
* workflow reliability

You do not need to manually implement retry logic.

---

# Best Practices

### Use events instead of direct calls

Emit events instead of calling long-running functions directly.

---

### Keep functions focused

Each function should handle **one specific task**.

---

### Avoid blocking API requests

Move slow operations to background jobs whenever possible.

---

### Use events for workflows

You can chain workflows by emitting events from inside other functions.

---

# Next Steps

Continue exploring the rest of the system:

* `emails.md` → sending transactional emails
* `database.md` → working with Prisma
* `deployment.md` → deploying the application
