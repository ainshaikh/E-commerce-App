
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from './pages/ContactPage';
import PolicyPage from './pages/PolicyPage';
import PagenotFound from './pages/PagenotFound';
import Register from './components/Auth/Register';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/policy' element={<PolicyPage />} />
      <Route path="*" element={<PagenotFound />} />   {/* * means if all the above page not accessible then by default pagenotfound page will open*/}
      <Route path="/register" element={<Register />} />
     </Routes>
    </>
  );
}

export default App;
