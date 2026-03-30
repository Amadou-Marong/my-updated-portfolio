import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PageNotFound from './pages/PageNotFound';
import { queryClientInstance } from './lib/query-client';
import { Toaster } from './components/ui/toaster';
import { QueryClientProvider } from '@tanstack/react-query';

const AuthenticatedApp = () => {
  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};



function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <AuthenticatedApp />
      </Router>
      <Toaster />
    </QueryClientProvider>
    
  )
}

export default App