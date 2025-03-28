import { render, screen } from '@testing-library/react';
import AdminDashboard from '@/pages/Admin/Dashboard';
import { fakeAdmin } from '../../fakes/fakeUserService';

test('displays admin metrics', async () => {
  fakeAdmin.metrics = { users: 50, workouts: 200 };
  
  render(<AdminDashboard admin={fakeAdmin} />);
  
  expect(await screen.findByText(/total users/i)).toHaveTextContent('50');
  expect(screen.getByText(/workouts/i)).toHaveTextContent('200');
});
