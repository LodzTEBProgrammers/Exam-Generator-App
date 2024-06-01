import "./navbar.css";
import { useState } from "react";
import Traily from "../../assets/imgs/Traily Logo.png";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header className="header flex flex-wrap sm:justify-start sm:flex-nowrap z-50 lg:w-8/12 rounded-lg mx-auto mt-0 lg:mt-5 py-5 border border-white/20">
            <nav className="relative w-full lg:w-12/12 px-4 lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <a href="" className="leading-none">
                        <img src={Traily} alt="Logo Traily" />
                    </a>
                    <div className="lg:hidden">
                        <label className="hamburger">
                            <input type="checkbox" onClick={toggleMobileMenu}/>
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                </div>
                <ul className="hidden lg:relative lg:flex lg:ml-auto lg:items-center lg:w-auto lg:space-x-4">
                    <li>
                        <a className="nav-link relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">
                            Home
                        </a>
                    </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <a className="nav-link relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">
                            How it work?
                        </a>
                    </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <a className="nav-link relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">
                            Contact
                        </a>
                    </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <a className="nav-link  relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">
                            FAQ
                        </a>
                    </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <a className="btn hidden lg:inline-block py-2 px-7 rounded-lg items-center" href="#">Panel</a>
                    </li>
                </ul>
                <ul className={`lg:hidden mobile-menu ${isMobileMenuOpen ? '' : 'hidden'}`}>
                    <li>
                        <a className="nav-link mt-3 mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-link mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">
                            How it work?
                        </a>
                    </li>
                    <li>
                        <a className="nav-link mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className="nav-link mb-5  relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="#">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a className="btn w-full text-center inline-block py-2 px-7 rounded-lg items-center" href="#">Panel</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
