# Getting Started

This guide will help you set up and run the starter kit locally.

The goal is to get the development environment running as quickly as possible.

---

# Requirements

Before starting, make sure you have the following installed:

* **Node.js** (v18 or newer)
* **npm**, **pnpm**, or **yarn**
* **PostgreSQL database**

You can use a local PostgreSQL instance or a hosted database provider such as:

* Supabase
* Neon
* Railway

---

# Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd starter-kit
```

Install dependencies:

```bash
npm install
```

or

```bash
pnpm install
```

---

# Environment Variables

The project requires several environment variables.

Copy the example file:

```bash
cp .env.example .env
```

Open `.env` and configure the required variables.

Example:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

NEXTAUTH_SECRET="your-secret"

RESEND_API_KEY="your-resend-api-key"

INNGEST_EVENT_KEY="your-inngest-event-key"
```

---

# Generating NEXTAUTH_SECRET

You can generate a secure secret using:

```bash
openssl rand -base64 32
```

Add the result to your `.env` file.

---

# Database Setup

This project uses **Prisma ORM** with PostgreSQL.

To sync the Prisma schema with your database run:

```bash
npm run db:push
```

This will:

* create tables
* apply the schema
* generate the Prisma client

---

# Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

# Running Inngest Locally

The project uses **Inngest** for background jobs and event-driven workflows.

To start the local Inngest development server run:

```bash
npx inngest-cli@latest dev
```

This will start the **Inngest Dev Server** and dashboard.

Dashboard URL:

```
http://localhost:8288
```

From the dashboard you can:

* Trigger events
* Inspect job executions
* Debug background functions

---

# Verifying the Setup

Once everything is running you should have:

* Next.js app running on **localhost:3000**
* Inngest dashboard running on **localhost:8288**
* Database connected via Prisma

If all services start successfully, the starter kit is ready for development.

---

# Next Steps

Once the project is running locally, you can explore the rest of the documentation:

* `architecture.md` → Project structure and architecture
* `authentication.md` → Auth.js setup
* `api-trpc.md` → Creating APIs with tRPC
* `background-jobs.md` → Creating background jobs with Inngest
* `emails.md` → Sending transactional emails
* `database.md` → Working with Prisma
* `deployment.md` → Deploying the application
