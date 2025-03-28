export const fakeUser = {
  id: 1,
  email: 'user@example.com',
  role: 'member',
  workouts: [],
  getWorkouts: jest.fn(() => Promise.resolve([]))
};

export const fakeAdmin = {
  id: 2,
  email: 'admin@example.com',
  role: 'admin',
  metrics: {},
  getMetrics: jest.fn(() => Promise.resolve({}))
};
