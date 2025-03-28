import { render, screen } from '@testing-library/react';
import WorkoutHistory from '../../../src/pages/WorkoutHistory';
import { fakeWorkouts } from '../../fakes/fakeWorkoutData';

 test('displays workout history', async () => {
  render(<WorkoutHistory workouts={fakeWorkouts} />);
  
  expect(await screen.findByText('Morning Yoga')).toBeInTheDocument();
  expect(screen.getByText('45 minutes')).toBeVisible();
});
