import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import AppRoutes from './routes/Alloutes';
import Loader from './layout/Loader';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;