import "./navbar.css";
import { useState } from "react";
import Traily from "../../assets/imgs/Traily Logo.png";

function Navbar({ infoRef, contactRef }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <header className="fixed top-0 lg:top-5 lg:px-5 w-full flex items-center sm:justify-center sm:flex-nowrap z-50">
      <nav className="relative w-[1488px] px-4 py-5 lg:flex lg:items-center lg:rounded-[20px] lg:justify-between backdrop-blur-md border-[.5px] border-white/25">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a href="" className="leading-none">
            <img src={Traily} alt="Logo Traily" />
          </a>
          <div className="lg:hidden">
            <label className="hamburger">
              <input type="checkbox" onClick={toggleMobileMenu} />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
        <ul className="hidden lg:relative lg:flex lg:ml-auto lg:items-center lg:w-auto lg:space-x-4">
          <li>
            <a
              className="nav-link relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ::hover cursor-pointer "
              href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="nav-link relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ::hover cursor-pointer "
              onClick={() => handleScroll(infoRef)}>
              How it works
            </a>
          </li>
          <li>
            <a
              className="nav-link relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ::hover cursor-pointer "
              onClick={() => handleScroll(contactRef)}>
              Contact
            </a>
          </li>
          <li>
            <a
              className="nav-link  relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ::hover cursor-pointer "
              href="#">
              FAQ
            </a>
          </li>
          <li>
            <a
              className="btn hidden lg:inline-block py-2 px-7 rounded-lg items-center"
              href="#">
              Panel
            </a>
          </li>
        </ul>
        <ul
          className={`lg:hidden mobile-menu ${isMobileMenuOpen ? "" : "hidden"}`}>
          <li>
            <a
              className="nav-link mt-3 mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="nav-link mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              href="#"
              onClick={() => handleScroll(infoRef)}>
              How it work?
            </a>
          </li>
          <li>
            <a
              className="nav-link mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              href="#"
              onClick={() => handleScroll(contactRef)}>
              Contact
            </a>
          </li>
          <li>
            <a
              className="nav-link mb-5  relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              href="#">
              FAQ
            </a>
          </li>
          <li>
            <a
              className="btn w-full text-center inline-block py-2 px-7 rounded-lg items-center"
              href="#">
              Panel
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
