import { useState, useEffect, Fragment } from "react";
import { PALETTES, applyPalette } from "./palette.js";
import CustomCursor from "./components/CustomCursor.jsx";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Certificates from "./components/Certificates.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
    applyPalette(PALETTES[0]);
  }, []);

  return (
    <Fragment>
      <CustomCursor enabled={true} />
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className={"app" + (!loading ? " ready" : "")}>
        <Header />
        <Hero loading={loading} />
        <Marquee />
        <About />
        <Work onOpen={setProject} />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
        <ProjectModal
          project={project}
          onClose={() => setProject(null)}
        />
        <ScrollToTop />
      </div>
    </Fragment>
  );
}
