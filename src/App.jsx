import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

export default function App() {
  // const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className="container max-w-full min-h-screen bg-black text-white relative">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}