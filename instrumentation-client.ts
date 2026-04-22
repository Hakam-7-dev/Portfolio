import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://dd0e5efc74b046e8891a2bc96894e5ed@o4511217896456192.ingest.de.sentry.io/4511217900126288",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],

  tracesSampleRate: 1,

  enableLogs: true,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  sendDefaultPii: true,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;