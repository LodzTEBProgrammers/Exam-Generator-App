const SidebarItemMobile = ({ href, icon }) => (
    <a href={href} className="flex items-center justify-center py-2 text-[#D1D5DB] font-medium transition-all duration-300 ease-out active:text-[#FFF] hover:text-[#FFF]">
      {icon}
    </a>
);
  
export default SidebarItemMobile;
  