import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import ParentCorner from "./pages/ParentCorner";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import Admission from "./pages/Admission";
import Facilities from "./pages/Facilities";
import NewsSection from "./components/ParentCorner/CenterSection";
import ScrollToHashElement from "./components/ScrollToHashElement";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    // refresh on route change (optional if router unmounts/remounts sections)
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Header />
       <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Curriculum" element={<Curriculum />} />
        <Route path="/ParentCorner" element={<ParentCorner />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={<GalleryPage />} />
         <Route path="/admission" element={<Admission />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/newsdetails" element={<NewsSection />} />
        {/* Add more routes here */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
