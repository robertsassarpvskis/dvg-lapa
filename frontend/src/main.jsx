import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import NewsPage from "./pages/News.jsx";
import LibraryPage from "./pages/LibraryPage.jsx";
import AdmissionPage from "./pages/AdmissionPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NewsOpened from "./pages/NewOpened.jsx";
import DormPage from "./pages/DormPage.jsx";
import StudentPage from "./pages/Student.jsx";
import ParentsPage from "./pages/Parents.jsx";
import InterestCategories from "./pages/Interests/InterestCategories.jsx";
import KorisPage from "./pages/Interests/JauktaisKoris.jsx";
import SmuPage from "./pages/Interests/smuPage.jsx";
import FlorballPage from "./pages/Interests/FlorbolsPage.jsx";
import TeatrisPage from "./pages/Interests/Teatris.jsx";
import DejasPage from "./pages/Interests/Dejas.jsx";
import RobotikaPage from "./pages/Interests/Robotika.jsx";
import KolektivsPage from "./pages/Kolektivs/Kolektivs.jsx";
import VestureCategories from "./pages/Vesture/VestureCategories.jsx";
import VesturePage from "./pages/Vesture/VesturePage.jsx";
import LidzparvaldePage from "./pages/Kolektivs/LidzparvaldePage.jsx";
import PadomePage from "./pages/Kolektivs/PadomePage.jsx";
import SocialaisPedagogsPage from "./components/Pedagogs.jsx";
import SocialaisPage from "./pages/Pedagogi/SocialaisPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/newsopened" element={<NewsOpened />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/admission" element={<AdmissionPage />} />

        <Route path="/kolektīvs" element={<KolektivsPage />} />
        <Route path="/līdzpārvalde" element={<LidzparvaldePage />} />
        <Route path="/padome" element={<PadomePage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dorms" element={<DormPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/parents" element={<ParentsPage />} />

        <Route path="/student/sociālais-pedagogs" element={<SocialaisPage />} />

        <Route path="/tradicijas-vesture-simbolika" element={<VestureCategories />} />
        <Route path="/vesture" element={<VesturePage />} />


        <Route path="/interests" element={<InterestCategories />} />
        <Route path="/interests/koris" element={<KorisPage />} />
        <Route path="/interests/smu" element={<SmuPage />} />
        <Route path="/interests/florbols" element={<FlorballPage />} />
        <Route path="/interests/teatris" element={<TeatrisPage />} />
        <Route path="/interests/dejas" element={<DejasPage />} />
        <Route path="/interests/robotika" element={<RobotikaPage />} />


      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
