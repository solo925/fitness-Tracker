import { render, screen } from '@testing-library/react';
import HomePage from '@/pages/Home/Home';

test('displays featured workouts', async () => {
  render(<HomePage />);
  
  expect(await screen.findByRole('heading', { name: /welcome/i })).toBeVisible();
  expect(screen.getAllByRole('article')).toHaveLength(3); // Featured workouts
});
