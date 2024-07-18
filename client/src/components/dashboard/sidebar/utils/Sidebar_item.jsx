const SidebarItem = ({ href, icon, text }) => (
  <a href={href} className="flex items-center py-2 gap-4 text-[#D1D5DB] font-medium transition-all duration-300 ease-out active:text-[#FFF] hover:text-[#FFF]">
    {icon}
    <p>{text}</p>
  </a>
);

export default SidebarItem;
