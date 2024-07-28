import "../../navbar/navbar.css";
import { useState } from "react";
import Traily from "../../../assets/imgs/Traily Logo.png";
import { Link } from "react-router-dom";
function Navbar() { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
        <header className="md:hidden fixed top-0 lg:top-5 lg:px-5 w-full flex items-center sm:justify-center sm:flex-nowrap z-50">
          <nav className="relative w-[1488px] px-4 py-5 lg:flex lg:items-center lg:rounded-[20px] lg:justify-between backdrop-blur-md border-[.5px] border-white/25">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link to="/" className="leading-none">
                <img src={Traily} alt="Logo Traily" />
              </Link>
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
            <ul className={`lg:hidden mobile-menu ${isMobileMenuOpen ? "" : "hidden"}`}>
              <li>
                <a href="" className="nav-link mt-3 mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left">
                    Dashboard
                </a>
              </li>
              <li>
                <a
                  className="nav-link mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Exams
                </a>
              </li>
              <li>
                <a
                  className="nav-link mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Generate Exam
                </a>
              </li>
              <li>
                <a
                  className="nav-link mb-3 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                Question Libary
                </a>
              </li>
              <li>
                <a
                  className="nav-link relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                  Calendar
                </a>
              </li>
              <div className="flex mt-3">
                <div className="items-center justify-center flex mr-3">
                  <a href="" className="text-[#D1D5DB]  border-2 border-[#D1D5DB]/15 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                  </a>
                </div>
                <div className="items-center justify-center flex">
                  <a href="" className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                  </a>
                </div>
              </div>
            </ul>
          </nav>
        </header>
    </>
  );
}

export default Navbar;
