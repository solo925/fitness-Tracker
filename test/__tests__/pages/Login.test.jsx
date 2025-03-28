import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '@/pages/auth/LoginPage';
import { fakeAuth } from '../../fakes/fakeAuthService';

 test('handles login success', async () => {
  render(<LoginPage />);
  
  fireEvent.change(screen.getByLabelText(/email/i), { 
    target: { value: 'test@example.com' }
  });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  await screen.findByText(/welcome back/i);
  expect(fakeAuth.login).toHaveBeenCalled();
});
