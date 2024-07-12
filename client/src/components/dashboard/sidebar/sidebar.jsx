import { useState } from 'react';
import Traily from '../../../assets/imgs/Traily Logo.png';
import Items from './utils/list';
import ItemsMobile from './utils/listMobile';
import SidebarItem from './utils/Sidebar_item';
import SidebarItemMobile from './utils/Sidebar_itemMobile';

const Sidebar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleView = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <>
      {isMobileView ? (
        <aside className="hidden md:flex w-64 pt-3 transition-width transition transform ease-in-out duration-1000 z-50  h-screen bg-[#0D0D0D] shadow flex-col align-middle justify-between border-r-2 border-[#D1D5DB]/5">
          <div className="sidebar-mobile px-8 py-8 flex flex-col justify-between w-full h-[calc(100vh)]">
            <div className="flex items-center mb-auto justify-center">
              <img src={Traily} alt="Hero Obraz" className="h-auto" />
            </div>
            <div className="flex flex-col justify-center flex-grow gap-7">
              {ItemsMobile.map((item, index) => (
                <SidebarItemMobile key={index} {...item} />
              ))}
            </div>
            <div className="flex items-center mt-auto justify-center mb-5">
              <div className="items-center justify-center flex">
                <button
                  type="button"
                  className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-2 rounded-lg"
                  onClick={toggleView}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-panel-left-open"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 3v18" />
                    <path d="m14 9 3 3-3 3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#D1D5DB]/10 mb-5"></div>
            <div className="flex items-center mt-auto justify-center">
              <div className="items-center justify-center flex mb-5 mr-3">
                <a
                  href=""
                  className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>
              </div>
              <div className="items-center justify-center flex mb-5">
                <a
                  href=""
                  className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#D1D5DB]/10"></div>
            <div className="mt-5 items-center justify-center flex">
              <div className="grid place-items-center items-center">
                <img
                  src="https://student.studentka.pl/img/wo/2/88/mezczyzna-obrazek_sredni_4025288.jpg"
                  alt="Hero Obraz"
                  className="max-w-full rounded-full h-12"
                />
              </div>
            </div>
          </div>
        </aside>
      ) : (
        <aside className="hidden md:flex w-64 pt-3 transition-width transition transform ease-in-out duration-1000 z-50  h-screen bg-[#0D0D0D] shadow flex-col align-middle justify-between border-r-2 border-[#D1D5DB]/5">
          <div className="sidebar px-8 py-8 flex flex-col justify-between w-full h-[calc(100vh)]">
            <div className="flex items-center mb-auto">
              <img src={Traily} alt="Hero Obraz" className="max-w-full h-auto" />
              <div className="w-px h-6 bg-[#F1F5F9] opacity-15 mx-auto"></div>
              {/* Przycisk Panelu Sidebar */}
              <button
                type="button"
                className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-1 rounded-md"
                onClick={toggleView}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 3v18m7-6l-3-3 3-3" />
                  </g>
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-center flex-grow gap-7">
              {Items.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </div>
            <div className="flex items-center mt-auto justify-center">
              <div className="items-center justify-center flex mb-5 mr-3">
                <a
                  href=""
                  className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>
              </div>
              <div className="items-center justify-center flex mb-5">
                <a
                  href=""
                  className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-2 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#D1D5DB]/10"></div>
            <div className="mt-5 items-center justify-center flex">
              <div className="grid place-items-center items-center mr-4">
                <img
                  src="https://student.studentka.pl/img/wo/2/88/mezczyzna-obrazek_sredni_4025288.jpg"
                  alt="Hero Obraz"
                  className="max-w-full rounded-full h-12"
                />
              </div>
              <p className="text-[#FFFFFF] text-[16px]">John Kowalski</p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
