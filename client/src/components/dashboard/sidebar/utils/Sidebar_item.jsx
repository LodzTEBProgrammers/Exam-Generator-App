const SidebarItem = ({ href, icon, text }) => (
  <a href={href} className="flex items-center text-[#D1D5DB] opacity-75 transition-all duration-300 ease-out active:text-[#FFF] active:opacity-100 hover:text-[#FFF] hover:opacity-100">
    <div className="grid place-items-center items-center mr-3">{icon}</div>
    {text}
  </a>
);

export default SidebarItem;
