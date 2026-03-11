# 🚀 T3 SaaS Starter Kit

A **production-ready starter kit** built on top of the [Create T3 App](https://create.t3.gg/) architecture.

This project provides a **fully configured foundation for modern SaaS applications**, including tools that are commonly required but usually take hours to set up manually:

* Background jobs
* Transactional emails
* Authentication
* Internationalization
* Type-safe APIs

The goal is to let developers **focus on building product features instead of infrastructure**.

---

# ✨ Features

This starter kit includes everything from the **T3 Stack** plus additional tooling commonly required in real-world SaaS applications.

* **Framework:** Next.js (App Router)
* **Language:** TypeScript (strict)
* **Styling:** Tailwind CSS + DaisyUI
* **API Layer:** tRPC (end-to-end type safety)
* **Database ORM:** Prisma
* **Database:** PostgreSQL
* **Authentication:** Auth.js (NextAuth v5)
* **Background Jobs:** Inngest
* **Transactional Emails:** Resend + React Email
* **Internationalization:** next-intl

---

# 🧱 Tech Stack

| Layer                | Technology             |
| -------------------- | ---------------------- |
| Framework            | Next.js (App Router)   |
| Language             | TypeScript             |
| API                  | tRPC                   |
| ORM                  | Prisma                 |
| Database             | PostgreSQL             |
| Authentication       | Auth.js                |
| Background Jobs      | Inngest                |
| Emails               | Resend + React Email   |
| Internationalization | next-intl              |
| Styling              | Tailwind CSS + DaisyUI |

---

# 🚀 Quick Start

## 1. Clone the repository

```bash
git clone <your-repository-url>
cd starter-kit
```

## 2. Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

## 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Update the required variables inside `.env`.

Important variables:

```
DATABASE_URL=
NEXTAUTH_SECRET=
RESEND_API_KEY=
INNGEST_EVENT_KEY=
```

Generate a `NEXTAUTH_SECRET` with:

```bash
openssl rand -base64 32
```

---

## 4. Initialize the Database

Push the Prisma schema to your database:

```bash
npm run db:push
```

---

## 5. Start the Development Server

```bash
npm run dev
```

Application will be available at:

```
http://localhost:3000
```

---

# 📚 Documentation

Detailed documentation is available inside the **`/docs` directory**.

* [Getting Started](docs/getting-started.md)
* [Architecture](docs/architecture.md)
* [Authentication](docs/authentication.md)
* [tRPC API](docs/api-trpc.md)
* [Background Jobs](docs/background-jobs.md)
* [Emails](docs/emails.md)
* [Internationalization](docs/i18n.md)
* [Database](docs/database.md)
* [Deployment](docs/deployment.md)

---

# 📂 Project Structure

```
.
├ prisma/
│  └ schema.prisma
│
├ src/
│  ├ app/              # Next.js App Router pages and layouts
│  ├ components/       # Reusable React components
│  ├ emails/           # React Email templates
│  ├ inngest/          # Background jobs and event handlers
│  ├ lib/              # Shared utilities and integrations
│  ├ server/           # Backend logic
│  │  ├ api/           # tRPC routers
│  │  ├ auth.ts        # Auth.js configuration
│  │  └ db.ts          # Prisma client
│  ├ styles/           # Global styles
│  └ trpc/             # tRPC client configuration
│
├ messages/            # Translation files
│  ├ en.json
│  └ es.json
│
└ docs/                # Project documentation
```

For more details about the architecture see:

→ `docs/architecture.md`

---

# 🗄️ Database Commands

The project uses **Prisma ORM**.

Common commands:

| Command               | Description             |
| --------------------- | ----------------------- |
| `npm run db:push`     | Push schema to database |
| `npm run db:generate` | Generate Prisma client  |
| `npm run db:migrate`  | Run database migrations |
| `npm run db:studio`   | Open Prisma Studio      |

---

# 🧪 Running Background Jobs Locally

To run the Inngest development server:

```bash
npx inngest-cli@latest dev
```

This will start the Inngest dashboard at:

```
http://localhost:8288
```

From there you can:

* Trigger events
* Inspect job execution
* Debug workflows

---

# 🚢 Deployment

This starter kit works well on platforms like:

* Vercel
* Railway
* Fly.io
* Any Docker-compatible infrastructure

Recommended workflow:

1. Push the repository to GitHub
2. Import the project into your hosting provider
3. Configure environment variables
4. Deploy

Make sure the following environment variables are set in production:

```
DATABASE_URL
NEXTAUTH_SECRET
RESEND_API_KEY
INNGEST_EVENT_KEY
INNGEST_SIGNING_KEY
```

---

# 🤝 Contributing

Contributions are welcome.

If you want to improve the starter kit:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📄 License

This project is open source and available under the **MIT License**.

---

Built with ❤️ using the **T3 Stack**
