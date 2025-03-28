import { render, screen } from '@testing-library/react';
import Dashboard from '@/pages/Dashboard/Dashboad';
import { mockApi } from '../../mocks/mockApiClient';

test('handles API errors gracefully', async () => {
  mockApi.get.mockRejectedValue(new Error('Network Error'));
  
  render(<Dashboard />);
  
  expect(await screen.findByText(/failed to load workouts/i))
    .toBeVisible();
});