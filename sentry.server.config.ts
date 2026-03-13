import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://71e98307bf3ccdcfe4694a86e4921b26@o4510738309906432.ingest.us.sentry.io/4511031490117632",
  tracesSampleRate: 1,
  enableLogs: true,
  sendDefaultPii: true,
});
