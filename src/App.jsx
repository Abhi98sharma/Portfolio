import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hamburgerMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(isOpen);
      }
    };
    window.addEventListener("resize", hamburgerMenu);

    return () => {
      window.removeEventListener("resize", hamburgerMenu);
    };
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerMenu isOpen={isOpen} toggle={toggle} />
      {!isOpen && (
        <div className="container max-w-full min-h-screen bg-black text-white relative">
          <Navbar toggle={toggle} />
          <Home />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
