import { render, screen, fireEvent } from '@testing-library/react';
import RegisterPage from '@/pages/auth/RegisterPage';
import { mockApi } from '../../mocks/mockApiClient';
import { fakeAuth } from '../../fakes/fakeAuthService';

test('handles successful registration', async () => {
  mockApi.post.mockResolvedValue({ data: { id: 1, email: 'test@example.com' } });
  
  render(<RegisterPage />);
  
  fireEvent.change(screen.getByLabelText(/email/i), { 
    target: { value: 'test@example.com' } 
  });
  fireEvent.click(screen.getByRole('button', { name: /register/i }));
  
  await screen.findByText(/registration successful/i);
  expect(mockApi.post).toHaveBeenCalledWith('/api/register', {
    email: 'test@example.com',
    password: expect.any(String)
  });
});
