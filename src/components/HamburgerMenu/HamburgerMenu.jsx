export default function HamburgerMenu({ isOpen, toggle }) {
  return (
    <>
      <nav
        className={
          isOpen
            ? "bg-black max-w-full min-h-screen flex flex-col items-start justify-start gap-5 font-Inter text-white"
            : "hidden"
        }
      >
        <div className="w-full h-[80px] px-8 flex justify-between items-center bg-[#111111]">
          <a href="#">
            <img
              className="w-40 lg:w-48 lg:h-20"
              src="/assets/name-logo.svg"
              alt="logo"
            />
          </a>
          <svg
            onClick={toggle}
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="flex flex-col items-start gap-7 px-8">
          <a href="#">
            <li
              onClick={toggle}
              className="text-lg text-white"
            >
              Home
            </li>
          </a>
          <a href="#skills">
            <li
              onClick={toggle}
              className="text-lg text-white"
            >
              Skills
            </li>
          </a>
          <a href="#projects">
            <li
              onClick={toggle}
              className="text-lg text-white"
            >
              Projects
            </li>
          </a>
          <a href="#contact">
            <li
              onClick={toggle}
              className="text-lg text-white"
            >
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
}
