import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


export default function App() {

  return (
    <>
      <div className='max-w-full min-h-screen bg-black text-white relative'>
        <Navbar />
        <Home />   
        <Skills /> 
        <Projects />   
        <Contact />
      </div>
    </>
  )
}


