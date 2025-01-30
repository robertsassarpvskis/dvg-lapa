import Image from "/src/assets/images/dya7.jpg";
import IconRG from "/src/assets/icons/icon_right_dark_green.svg";

const ProgramCard = ({title}) => {
    return (
        <a
            className="group bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:-translate-y-1"
            href="#"
        >
            <div className="relative">
                <span className="absolute top-3 left-3 bg-[#526144] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Sport
                </span>
                <img
                    src={Image}
                    alt="STEM Program"
                    className="w-full h-48 object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b9d77]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 border-t-4 border-[#8b9d77]">
                <h3 className="text-xl font-semibold mb-2 text-[#526144]">
                    {title}
                </h3>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                        Innovative curriculum focusing on Science, Technology,
                        Engineering, and Mathematics.
                    </p>
                    <img
                        src={IconRG}
                        alt="Par Mums"
                        className="w-10 transition-transform duration-500 ease-in-out group-hover:rotate-180"
                    />
                </div>
            </div>
        </a>
    );
};

export default ProgramCard;
