import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="max-w-full h-[80px] bg-[#111111] flex items-center text-white justify-between px-[120px] font-Pridi text-[16px]">
                <Link to="/" >
                    <img className="w-48 h-20 z-20" src="/assets/name-logo.svg" alt="logo" />
                </Link>
                <ul className='flex justify-between items-center w-[600px] '>
                    <Link to="/" >Home</Link>
                    <Link to="/skills" >Skills</Link>
                    <Link to="/projects" >Projects</Link>
                    <Link to="https://abhijeet98.hashnode.dev/">Blogs</Link>
                    <Link to="/contact" >Contact</Link>
                    <button><img className='w-8' src="/assets/icon _sun outline_.png" alt="light-icon" /></button>
                </ul>
            </nav>
        </>
    )
}


