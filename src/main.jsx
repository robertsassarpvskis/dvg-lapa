import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import NewsPage from './pages/News.jsx';
import LibraryPage from './pages/LibraryPage.jsx';
import AdmissionPage from './pages/AdmissionPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/contact" element={<ContactPage />} />


            {/* <Route path="/education" element={<InfoPage />} />
            <Route path="/services" element={<InfoPage />} /> */}

          </Routes>
        </Router>
        <Footer />
  </StrictMode>,
);
