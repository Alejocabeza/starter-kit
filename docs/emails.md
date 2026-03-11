# Emails

This starter kit includes a **transactional email system** built with:

* **React Email** → email templates
* **Resend** → email delivery service

This setup allows developers to design emails using **React components** and send them through the Resend API.

---

# Why React Email?

Traditional email templates are often written in raw HTML, which can be difficult to maintain.

React Email allows you to build emails using **React components**, which provides:

* better developer experience
* reusable components
* easier styling
* maintainable templates

---

# Email Architecture

The email system works as follows:

```id="0llqcw"
Application Event
       │
       ▼
React Email Template
       │
       ▼
Email Utility (sendEmail)
       │
       ▼
Resend API
       │
       ▼
User Inbox
```

Emails can be triggered directly from the application or from **background jobs using Inngest**.

---

# File Structure

Email templates live inside:

```id="m3dnbm"
src/emails/
```

Example structure:

```id="bhzq0a"
src/emails/
├ WelcomeEmail.tsx
├ ResetPasswordEmail.tsx
└ components/
   ├ EmailLayout.tsx
   └ Button.tsx
```

Shared email utilities live in:

```id="cdg1im"
src/lib/email.ts
```

---

# Creating an Email Template

Templates are written using React components.

Example:

```tsx id="pyygj8"
import { Html, Head, Body, Container, Text } from "@react-email/components"

type WelcomeEmailProps = {
  name: string
}

export default function WelcomeEmail({ name }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Text>Welcome to the platform!</Text>
        </Container>
      </Body>
    </Html>
  )
}
```

This component will be rendered and converted into an HTML email.

---

# Sending an Email

Emails are sent using a helper function.

Example:

```ts id="3qti0s"
import { sendEmail } from "@/lib/email"
import WelcomeEmail from "@/emails/WelcomeEmail"

await sendEmail({
  to: "user@example.com",
  subject: "Welcome!",
  react: WelcomeEmail({ name: "Alex" }),
})
```

The `react` property receives the React Email template.

---

# Resend Configuration

Emails are delivered using the **Resend API**.

Environment variable required:

```id="tt5miy"
RESEND_API_KEY=
```

This variable must be configured in:

* `.env` (local development)
* your deployment platform

Example `.env`:

```id="e0t6w1"
RESEND_API_KEY="re_xxxxxxxxx"
```

---

# Email Utility

The email utility typically lives in:

```id="9wgrrb"
src/lib/email.ts
```

Example structure:

```ts id="9cwhnm"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({ to, subject, react }) {
  return resend.emails.send({
    from: "Acme <noreply@example.com>",
    to,
    subject,
    react,
  })
}
```

This abstraction keeps email logic centralized.

---

# Sending Emails from Background Jobs

Emails are often sent from **Inngest background jobs**.

Example:

```ts id="38ef0h"
export const sendWelcomeEmail = inngest.createFunction(
  { id: "send-welcome-email" },
  { event: "user/created" },
  async ({ event }) => {
    const user = event.data

    await sendEmail({
      to: user.email,
      subject: "Welcome!",
      react: <WelcomeEmail name={user.name} />,
    })
  }
)
```

This prevents email sending from blocking API requests.

---

# Reusable Email Components

You can create reusable components inside:

```id="p4u90b"
src/emails/components/
```

Example:

```id="5psj3p"
components/
├ EmailLayout.tsx
├ Button.tsx
├ Header.tsx
└ Footer.tsx
```

This helps maintain consistent email design across templates.

---

# Testing Emails

React Email allows you to preview emails locally.

You can install the React Email preview tool:

```bash id="ct52gk"
npx react-email dev
```

This starts a preview server where you can visually inspect templates.

---

# Best Practices

### Keep templates simple

Email clients have limited CSS support.

---

### Use reusable components

Shared layouts help maintain consistency.

---

### Send emails asynchronously

Prefer sending emails through **background jobs** instead of directly inside API requests.

---

### Avoid heavy logic inside templates

Templates should focus only on presentation.

---

# Next Steps

Continue exploring the rest of the system:

* `database.md` → working with Prisma
* `deployment.md` → deploying the application
* `i18n.md` → internationalization support
