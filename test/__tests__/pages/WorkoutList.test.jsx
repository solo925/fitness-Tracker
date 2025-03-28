import { render, screen } from '@testing-library/react';
import Workouts from '@/pages/workout/workout';
import { fakeWorkouts } from '../../fakes/fakeWorkoutData';


test('renders workout cards', async () => {
  render(<Workouts workouts={fakeWorkouts} />);
  
  expect(await screen.findAllByRole('listitem')).toHaveLength(fakeWorkouts.length);
  expect(screen.getByText(/morning yoga/i)).toBeInTheDocument();
});
