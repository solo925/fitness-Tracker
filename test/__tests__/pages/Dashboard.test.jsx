import { render, screen } from '@testing-library/react';
import Dashboard from '@/pages/Dashboard/Dashboad';
import { mockApi } from '../../mocks/mockApiClient';

test('displays user workouts', async () => {
  mockApi.get.mockResolvedValue({ data: [] });
  render(<Dashboard />);
  expect(await screen.findByText(/no workouts/i)).toBeVisible();
});

test('handles API errors', async () => {
  mockApi.get.mockRejectedValue(new Error('API Failure'));
  render(<Dashboard />);
  expect(await screen.findByText(/error loading/i)).toBeVisible();
});
