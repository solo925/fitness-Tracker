export const mockApiClient = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  patch: jest.fn(() => Promise.resolve({ data: {} })),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
  
  // Reset between tests
  reset() {
    this.get.mockReset().mockImplementation(() => Promise.resolve({ data: {} }));
    this.post.mockReset().mockImplementation(() => Promise.resolve({ data: {} }));
    this.patch.mockReset().mockImplementation(() => Promise.resolve({ data: {} }));
    this.delete.mockReset().mockImplementation(() => Promise.resolve({ data: {} }));
  }
};
