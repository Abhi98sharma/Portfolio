import { useState } from "react";

export default function Navbar({ toggle }) {
  const [activeState, setActiveState] = useState("#home");

  return (
    <>
      <nav className="max-w-full container h-[80px] bg-[#111111] flex items-center justify-between text-white px-8 lg:px-[120px] font-Pridi text-[16px] sticky top-0 z-10">
        <a href="#">
          <img
            className="w-40 lg:w-48 lg:h-20"
            src="/assets/name-logo.svg"
            alt="logo"
          />
        </a>
        <button className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
            onClick={toggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <ul className="hidden lg:flex justify-between items-center w-[450px]">
          <a
            href="#home"
            onClick={() => setActiveState("#home")}
            className={
              activeState === "#home"
                ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]"
                : " "
            }
          >
            Home
          </a>

          <a
            href="#skills"
            onClick={() => setActiveState("#skills")}
            className={
              activeState === "#skills"
                ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]"
                : " "
            }
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setActiveState("#projects")}
            className={
              activeState === "#projects"
                ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]"
                : " "
            }
          >
            Projects
          </a>

          <a
            href="https://abhijeet98.hashnode.dev/"
            target="_blank"
            onClick={() => setActiveState("#blogs")}
            className={
              activeState === "#blogs"
                ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]"
                : " "
            }
          >
            Blogs
          </a>

          <a
            href="#contact"
            onClick={() => setActiveState("#contact")}
            className={
              activeState === "#contact"
                ? "active transition ease-in-out delay-100 hover:text-[#3A36F3]"
                : " "
            }
          >
            Contact
          </a>
        </ul>
      </nav>
    </>
  );
}
