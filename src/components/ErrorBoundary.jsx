import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components
import ErrorBoundary from './ErrorBoundary';
import Reports from './Reports';
import NotFoundPage from './NotFoundPage'; // Create a NotFoundPage component to display the "Page not found" message

// Define routes
const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Reports} />
          {/* Other routes */}
          <Route component={NotFoundPage} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
