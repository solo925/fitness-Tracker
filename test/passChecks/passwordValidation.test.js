import validatePassword from '@/utils/auth';

describe('Password Validation', () => {
  test('rejects passwords shorter than 8 chars', () => {
    expect(validatePassword('Pass12!')).toBe(false);
  });

  test('accepts valid passwords', () => {
    expect(validatePassword('SecurePass123!')).toBe(true);
  });
});