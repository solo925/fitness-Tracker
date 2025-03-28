export const createSuccessDub = (data) => 
  jest.fn(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    })
  );

export const createErrorDub = (status = 500) =>
  jest.fn(() => 
    Promise.resolve({
      ok: false,
      status,
      json: () => Promise.resolve({ error: 'Test Error' })
    })
  );