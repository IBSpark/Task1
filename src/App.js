import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Home';
import Footer from './Footer';
import FAQ from './FAQ';
import SignIn from './SignIn';
import ManageAccount from './ManageAccount';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/manageaccount" element={<ManageAccount />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
