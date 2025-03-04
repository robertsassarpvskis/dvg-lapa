import icon from "/src/assets/icons/icon_right_dark_green.svg";

const Dropdown = ({ title, links, wide = false }) => {
  return (
    <div className="relative group">
      <button className="hover:text-green-700 transition font-medium flex items-center">
        {title}  
        <img 
          src={icon} 
          alt="arrow" 
          className="w-6 h-6 transform transition-all duration-300 group-hover:rotate-90"
        />
      </button>
      <div 
        className={`absolute left-0 top-full ${
          wide ? "w-72" : "w-56"
        } flex flex-col bg-white shadow-xl rounded-xl border-2 border-green-700 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform scale-95 group-hover:scale-100 backdrop-blur-lg`}
      >
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className="px-5 py-3 hover:bg-green-100 transition first:hover:rounded-t-xl last:hover:rounded-b-xl"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
