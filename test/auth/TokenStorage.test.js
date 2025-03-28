import { mockLocalStorage } from '../../dubs/localStorageDub';
import { loginUser } from '@/auth/TokenStorage';

test('saves JWT to localStorage on login', async () => {
    await loginUser({email: 'test@example.com', password: 'pass123!'});
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
  });