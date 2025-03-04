import IconRG from "/src/assets/icons/icon_right_dark_green.svg";

const MissonElement = ({ Link, icon, title, text, children }) => {
    return (
        <div
            href={Link || "#"}
            className="group p-5 bg-white rounded-lg shadow-xl border-l-4 border-[#8b9d77] hover:shadow-lg hover:translate-y-[-5px] hover:bg-[#f7f8f5] hover:border-[#8b9d77] transition-all duration-300"
            target={Link ? "_blank" : "_self"}
            rel={Link ? "noopener noreferrer" : ""}
        >
            <img
                src={icon}
                alt="Mission icon"
                className="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-[#526144] mb-3 transition-colors duration-300 group-hover:text-[#8b9d77]">
                {title}
            </h3>

            <div className="flex items-center gap-2">
                <p className="text-gray-600 leading-6 transition-colors duration-300 group-hover:text-gray-800">
                    {text}
                </p>
                
                {/* Show the arrow only if Link is not empty */}
                {Link && <img src={IconRG} alt="Arrow Icon" className="w-6 h-auto transition-transform duration-300 group-hover:rotate-180" />}
            </div>
        
            {children}
        </div>
    );
};

export default MissonElement;
