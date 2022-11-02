import { useState } from "react";

export default function Navbar() {

    const [activeState, setActiveState] = useState("#home");

    return (
        <>
            <nav className="max-w-full container h-[80px] bg-[#111111] flex items-center text-white justify-between px-[120px] font-Pridi text-[16px] sticky top-0 z-10 dark:bg-white dark:text-black">
                <a href="#" >
                    <img className="w-48 h-20 z-20" src="/assets/name-logo.svg" alt="logo" />
                </a>
                <ul className='flex justify-between items-center w-[600px]'>

                    <a href="#home" onClick={() => setActiveState("#home")} className={activeState === "#home" ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]" : " "}>Home
                    </a>

                    <a href="#skills" onClick={() => setActiveState("#skills")} className={activeState === "#skills" ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]" : " "}>Skills
                    </a>

                    <a href="#projects" onClick={() => setActiveState("#projects")} className={activeState === "#projects" ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]" : " "}>Projects
                    </a>

                    <a href="https://abhijeet98.hashnode.dev/" target="_blank" onClick={() => setActiveState("#blogs")} className={activeState === "#blogs" ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]" : " "}>Blogs
                    </a>

                    <a href="#contact" onClick={() => setActiveState("#contact")} className={activeState === "#contact" ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]" : " "}>Contacts
                    </a>

                    <button>
                        <img className='w-8' src="/assets/icon _sun outline_.png" alt="light-icon" />
                    </button>
                </ul>
            </nav>
        </>
    )
}

// onClick={() => setDarkMode(!darkMode)}


