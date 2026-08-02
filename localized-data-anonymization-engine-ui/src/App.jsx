import "./App.css";
import { useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FileTypes from "./components/FileTypes/FileTypes";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {

  const heroRef = useRef(null);

  const handleNavbarUpload = () => {

      heroRef.current?.openFilePicker();

  };

  const handleFileTypeClick = (type) => {

      heroRef.current?.openFilePicker(type);

  };

  return (
    <div className="app">

      <Navbar onUploadClick={handleNavbarUpload} />

      <section id="home">
        <Hero ref={heroRef} />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="supported-files">
        <FileTypes onFileTypeClick={handleFileTypeClick} />
      </section>

      <section id="about">
          <About />
      </section>

      <Footer />

    </div>
  );
}

export default App;