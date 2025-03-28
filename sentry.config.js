const { withSentryConfig } = require('@sentry/webpack-plugin');

module.exports = withSentryConfig({
  org: 'Dedan Kimathi University',
  project: 'first',
  authToken: process.env.SENTRY_AUTH_TOKEN,
}, {
  dryRun: process.env.NODE_ENV !== 'production',
  release: process.env.REACT_APP_VERSION,
});