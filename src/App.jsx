import { Routes, Route } from "react-router-dom"; // only import these
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
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
import ScrollToTop from "./components/ScrollToTop";
import NewsDetail from "./components/ParentCorner/NewsDetail";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <ScrollToHashElement />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/parentcorner" element={<ParentCorner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
