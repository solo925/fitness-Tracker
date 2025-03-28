import { Component } from 'react';
import * as Sentry from '@sentry/react';

export default class ErrorBoundary extends Component {
  state = { error: null };
  
  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    return this.state.error ? (
      <div className="error-fallback">
        <h2>Something went wrong</h2>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    ) : this.props.children;
  }
}