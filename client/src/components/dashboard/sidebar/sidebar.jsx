import { useState } from 'react';
import Traily from '../../../assets/imgs/Traily Logo.png';
import Items from './utils/list';
import ItemsMobile from './utils/listMobile';
import SidebarItem from './utils/Sidebar_item';
import SidebarItemMobile from './utils/Sidebar_itemMobile';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../../services/auth/authActions';
import { useGetTasksQuery } from '../../../services/examService';
import { useGetUserQuery } from '../../../services/userService';

const Sidebar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const toggleView = () => {
    setIsMobileView(!isMobileView);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(userLogout())
      .unwrap()
      .then(() => {
        console.log('User logged out successfully');
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.error('Logout error:', error);
      }); 
  };
  const tasks = useGetUserQuery();

  return (
    <>
      {isMobileView ? (
        <aside className="hidden md:flex flex-col h-screen p-8 align-middle justify-between transition-width transition transform ease-in-out duration-1000 z-50 bg-[#0D0D0D] border-r border-[#F1F5F9]/10">
          <div className="w-full flex flex-col items-center pt-2 pb-6">
            <img src={Traily} alt="Hero Obraz" className="max-w-full h-auto" />
          </div>
          <div className="flex flex-col gap-6">
            {ItemsMobile.map((item, index) => (
              <SidebarItemMobile key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <button type="button" className="flex items-center p-2 text-[#D1D5DB] border-2 border-[#F1F5F9]/15 rounded-lg" onClick={toggleView}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"> <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18m7-6l-3-3 3-3" /></g></svg>
            </button>
            <div className="w-full flex items-center justify-center px-2">
              <hr className="w-full border-[#F1F5F9]/10"></hr>
            </div>
            <div className="flex items-center gap-4">
              <a href="" className="flex items-center p-2 text-[#D1D5DB] border-2 border-[#F1F5F9]/15 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
              </a>
              <a href="" className="flex items-center p-2 text-[#D1D5DB] border-2 border-[#F1F5F9]/15 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
              </a>
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <hr className="w-full border-[#F1F5F9]/10"></hr>
            </div>
            <div className="flex place-items-center items-center">
              <img src="https://student.studentka.pl/img/wo/2/88/mezczyzna-obrazek_sredni_4025288.jpg" alt="Avatar" className="rounded-full h-12"
              />
            </div>
          </div>
        </aside>
      ) : (
        <aside className="hidden md:flex flex-col h-screen p-8 align-middle justify-between transition-width transition transform ease-in-out duration-1000 z-50 bg-[#0D0D0D] border-r border-[#F1F5F9]/10">
          <div className="w-full flex items-center justify-between pt-2 pb-6">
            <img src={Traily} alt="Hero Obraz" className="max-w-full h-auto" />
            <div className="flex gap-4">
              <div className="flex items-center py-2">
                <div className="h-full border-l-2 border-[#F1F5F9]/10"></div>
              </div>
              <button type="button" className="flex p-1 border-2 border-[#F1F5F9]/10 rounded-md text-[#D1D5DB]" onClick={toggleView}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"> <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18m7-6l-3-3 3-3" /></g></svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {Items.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <a  className="flex items-center p-2 text-[#D1D5DB] border-2 border-[#F1F5F9]/15 rounded-lg cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
              </a>
              <a onClick={handleLogout} className="flex items-center p-2 text-[#D1D5DB] border-2 border-[#F1F5F9]/15 rounded-lg cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
              </a>
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <hr className="w-full border-[#F1F5F9]/10"></hr>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://student.studentka.pl/img/wo/2/88/mezczyzna-obrazek_sredni_4025288.jpg" alt="Avatar" className="rounded-full h-12"
              />
              <p className="text-[#FFFFFF] text-base">{userInfo.first_name} {userInfo.last_name}</p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
