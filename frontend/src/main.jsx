import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "../src/components/NavBar.jsx";
import Footer from "../src/components/Footer.jsx";
import HomePage from "../src/pages/HomePage.jsx";
import NewsPage from "../src/pages/News.jsx";
import LibraryPage from "../src/pages/LibraryPage.jsx";
import AdmissionPage from "../src/pages/AdmissionPage.jsx";
import ContactPage from "../src/pages/ContactPage.jsx";
import NewsOpened from "../src/pages/NewOpened.jsx";
import DormPage from "../src/pages/DormPage.jsx";
import StudentPage from "../src/pages/Student.jsx";
import ParentsPage from "../src/pages/Parents.jsx";
import InterestCategories from "../src/pages/Interests/InterestCategories.jsx";
import KorisPage from "../src/pages/Interests/JauktaisKoris.jsx";
import SmuPage from "../src/pages/Interests/smuPage.jsx";
import FlorballPage from "../src/pages/Interests/FlorbolsPage.jsx";
import TeatrisPage from "../src/pages/Interests/Teatris.jsx";
import DejasPage from "../src/pages/Interests/Dejas.jsx";
import RobotikaPage from "../src/pages/Interests/Robotika.jsx";
import KolektivsPage from "../src/pages/Kolektivs/Kolektivs.jsx";
import VestureCategories from "../src/pages/Vesture/VestureCategories.jsx";
import VesturePage from "../src/pages/Vesture/VesturePage.jsx";
import LidzparvaldePage from "../src/pages/Kolektivs/LidzparvaldePage.jsx";
import PadomePage from "../src/pages/Kolektivs/PadomePage.jsx";
import SocialaisPedagogsPage from "./components/Pedagogs.jsx";
import SocialaisPage from "../src/pages/Pedagogi/SocialaisPage.jsx";

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
