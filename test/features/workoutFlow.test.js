import App from "@/App";
test('completes workout creation flow', async () => {
  render(<App />);
  
  fireEvent.click(screen.getByText(/new workout/i));
  fireEvent.input(screen.getByLabelText(/workout name/i), {
    target: {value: 'Evening Swim'}
  });
  fireEvent.click(screen.getByText(/save/i));
  
  expect(await screen.findByText(/evening swim/i)).toBeVisible();
  expect(mockApi.post).toHaveBeenCalledWith('/workouts', {
    name: 'Evening Swim',
    duration: 0
  });
});