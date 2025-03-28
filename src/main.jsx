import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Replay } from '@sentry/replay';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritesProvider } from './contexts/FavouritesContext';
import { AdminProvider } from './contexts/AdminContext';
import ErrorBoundary from './ErrorBoundary';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing({
      tracePropagationTargets: [import.meta.env.VITE_API_URL]
    }),
    new Replay()
  ],
  tracesSampleRate: 0.2,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sentry.Profiler id="app-root">
      <ErrorBoundary>
        <AuthProvider>
          <FavoritesProvider>
            <AdminProvider>
              <App />
            </AdminProvider>
          </FavoritesProvider>
        </AuthProvider>
      </ErrorBoundary>
    </Sentry.Profiler>
  </StrictMode>
);