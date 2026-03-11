# Deployment

This starter kit is production-ready and can be deployed to platforms such as **Vercel**, **Railway**, or **Fly.io**.

Deployment includes:

* Next.js frontend and backend
* tRPC API
* Prisma database migrations
* Background jobs (Inngest)
* Transactional emails (Resend)
* Internationalization (next-intl)

---

# Environment Variables

Before deploying, make sure the following environment variables are set:

```env id="e1r7k3"
DATABASE_URL=postgres://user:password@host:port/dbname
NEXTAUTH_SECRET=your_secret_key
RESEND_API_KEY=your_resend_api_key
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

* `DATABASE_URL` → PostgreSQL connection string
* `NEXTAUTH_SECRET` → used by Auth.js for session encryption
* `RESEND_API_KEY` → for sending emails
* `INNGEST_EVENT_KEY` and `INNGEST_SIGNING_KEY` → for Inngest in production

---

# Vercel Deployment (Recommended)

1. Push your code to **GitHub**.
2. Import your project into **Vercel**.
3. Set all environment variables in the **Vercel dashboard**.
4. Deploy the project.

The app will be available on your Vercel domain.

---

# Prisma Migrations

For production, always use migrations instead of `db:push`.

```bash id="k4p8v2"
npm run db:migrate
```

This ensures database changes are applied safely.

---

# Inngest in Production

In production, configure the **Inngest Cloud**:

1. Set `INNGEST_EVENT_KEY` and `INNGEST_SIGNING_KEY` in your environment variables.
2. Deploy your functions. They will listen to events automatically.
3. Monitor workflows via the **Inngest dashboard**.

---

# Resend in Production

1. Set `RESEND_API_KEY` in the production environment.
2. Use the same `sendEmail` helper to send emails.
3. Emails are sent asynchronously, preferably from background jobs.

---

# Other Platforms

You can deploy to any platform that supports Node.js and PostgreSQL.

* **Railway**

  * Connect your GitHub repo
  * Set environment variables
  * Deploy
* **Fly.io**

  * Configure a Dockerfile
  * Set environment variables
  * Deploy

---

# Docker Deployment

If you prefer Docker:

1. Build the Docker image:

```bash id="d8p3k7"
docker build -t starter-kit-ts .
```

2. Run the container:

```bash id="w6r4q1"
docker run -p 3000:3000 --env-file .env starter-kit-ts
```

This runs the app on `http://localhost:3000`.

---

# Best Practices

### Use Migrations in Production

Always apply migrations for database changes.

---

### Keep Secrets Secure

Never commit `.env` files with sensitive keys.

---

### Monitor Background Jobs

Check Inngest dashboard regularly to ensure jobs are processed correctly.

---

### Use HTTPS

Always deploy behind HTTPS for secure authentication.

---

# Next Steps

After deployment, you can:

* add more features
* extend authentication providers
* add new email templates
* add new translations
* expand the database schema
