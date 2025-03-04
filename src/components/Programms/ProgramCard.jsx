import IconRG from "/src/assets/icons/icon_right_dark_green.svg";

const ProgramCard = ({ title, date, category, backgroundImage, description }) => {
    const maxCharacters = 110;
    const truncatedDescription = description.length > maxCharacters ? `${description.substring(0, maxCharacters)}...` : description;

    return (
        <div className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
            <div className="relative">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-56 object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b9d77]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 border-t-4 border-[#8b9d77]">
                {category && (
                    <span className="absolute top-3 left-3 bg-[#526144] group-hover:bg-[#8b9d77] transition-all duration-300 text-white text-xs font-light group-hover:font-medium px-3 py-1 rounded-full shadow-md">
                        {category}
                    </span>
                )}
                <div className="flex flex-col mb-3">
                    <p className="text-xs text-black/50">{date}</p>
                    <h3 className="text-xl font-semibold text-[#526144]">{title}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                        {truncatedDescription}
                    </p>
                    <div className="flex items-center space-x-2">
                        <img
                            src={IconRG}
                            alt="Par Mums"
                            className="w-10 h-auto transition-transform duration-500 ease-in-out group-hover:rotate-180"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
