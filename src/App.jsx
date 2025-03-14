import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Alloutes";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
