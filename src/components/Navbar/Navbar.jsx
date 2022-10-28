import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="max-w-full h-[80px] bg-[#111111] flex items-center text-white justify-between px-[120px] font-Pridi text-[16px] sticky top-0 z-10">
                <Link to="/" >
                    <img className="w-48 h-20 z-20" src="/assets/name-logo.svg" alt="logo" />
                </Link>
                <ul className='flex justify-between items-center w-[600px]'>
                    <Link to="/">
                        <li className="transition ease-in-out delay-100 hover:text-[#3A36F3]">Home</li>
                    </Link>
                    <Link to="/skills" >
                        <li className="transition ease-in-out delay-100 hover:text-[#3A36F3]">Skills</li>
                    </Link>
                    <Link to="/projects" >
                        <li className="transition ease-in-out delay-100 hover:text-[#3A36F3]">Projects</li>
                    </Link>
                    <Link to="https://abhijeet98.hashnode.dev/">
                        <li className="transition ease-in-out delay-100 hover:text-[#3A36F3]">Blogs</li>
                    </Link>
                    <Link to="/contact" >
                        <li className="transition ease-in-out delay-100 hover:text-[#3A36F3]">Contacts</li>
                    </Link>
                    <button><img className='w-8' src="/assets/icon _sun outline_.png" alt="light-icon" /></button>
                </ul>
            </nav>
        </>
    )
}


