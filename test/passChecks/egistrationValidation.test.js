import validateEmail from '@/src/passChecks/registrationValidation';

test('rejects invalid emails', () => {
  expect(validateEmail('invalid-email')).toBe(false);
  expect(validateEmail('valid@example.com')).toBe(true);
});