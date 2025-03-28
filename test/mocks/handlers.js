import { rest } from 'msw';

export const handlers = [
  rest.get('/api/workouts', (req, res, ctx) => {
    return res(
      ctx.json([{ id: 1, name: 'Morning Routine', duration: 30 }])
    );
  }),
  rest.post('/api/login', (req, res, ctx) => {
    return res(ctx.json({ token: 'fake_jwt' }));
  })
];
