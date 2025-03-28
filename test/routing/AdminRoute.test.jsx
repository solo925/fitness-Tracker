import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminRoute from '@/routing/AdminRoute';

test('redirects non-admins from admin dashboard', () => {
  render(
    <MemoryRouter>
      <AdminRoute user={{role: 'member'}} />
    </MemoryRouter>
  );
  
  expect(screen.getByText(/dashboard/i)).not.toBeVisible();
  expect(screen.getByText(/login/i)).toBeVisible();
});