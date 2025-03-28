export default function TestError() {
    throw new Error('Test Error Boundary');
    return null;
  }
  
  
  <Route path="/test-error" element={<TestError />} />