const SidebarItemMobile = ({ href, icon }) => (
    <a href={href} className="flex items-center justify-center text-[#D1D5DB] opacity-75 transition-all duration-300 ease-out active:text-[#FFF] active:opacity-100 hover:text-[#FFF] hover:opacity-100">
      <div className="grid place-items-center items-center">{icon}</div>
    </a>
);
  
export default SidebarItemMobile;
  