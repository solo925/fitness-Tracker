import { render, screen } from '@testing-library/react';
import Dashboard from '@/pages/Dashboard/Dashboad';
import { act } from 'react-dom/test-utils';
import PerfMetrics from '@/utils/PerfMetrics';

test('records dashboard load time', async () => {
  await act(async () => {
    render(<Dashboard />);
  });
  
  expect(PerfMetrics.recordTiming).toHaveBeenCalledWith(
    'dashboard_load',
    expect.any(Number)
  );
});