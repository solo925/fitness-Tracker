import { render, screen } from '@testing-library/react';
import ErrorBoundary from '@/ErrorBoundary';

test('displays fallback UI on error', () => {
  const FaultyComponent = () => { throw new Error('Test crash') };
  
  render(
    <ErrorBoundary>
      <FaultyComponent />
    </ErrorBoundary>
  );
  
  expect(screen.getByText(/something went wrong/i)).toBeVisible();
});