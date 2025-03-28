import { lazy } from 'react';

export const Dashboard = lazy(() => import('./features/dashboard/Dashboard'));
export const WorkoutHistory = lazy(() => 
  import(/* webpackPrefetch: true */ './features/history/WorkoutHistory')
);
export const Settings = lazy(() => 
  import(/* webpackChunkName: "settings" */ './features/settings/Settings')
);