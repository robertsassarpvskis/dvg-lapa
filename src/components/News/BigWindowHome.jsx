import IconRG from "/src/assets/icons/icon_right_dark_green.svg";
import Image from "/src/assets/images/pils.jpg";

const BigWindow = () => {
    return ( 
        <a 
            href="#" 
            className="relative block h-[510px] overflow-hidden shadow-lg rounded-2xl group-hover:transform transition-transform duration-500"
        >
            <img
                src={Image}
                alt="Science Fair"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:via-black/30">
                <div className="absolute bottom-0 p-8 text-white">
                    <span className="inline-block px-4 py-1 bg-greenDark rounded-full text-sm font-medium mb-4">
                        Featured Story
                    </span>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-greenLight transition-colors duration-300">
                        Revolutionary Science Fair Projects Showcase Student Innovation
                    </h3>
                    <p className="mb-4 line-clamp-2 group-hover:text-greenLight transition-colors duration-300">
                        This year's science fair brought groundbreaking projects that demonstrate our students' exceptional creativity and scientific prowess.
                    </p>
                    <div className="flex items-center space-x-4">
                        <div className="flex-1">
                            <p className="text-sm text-greenDark">October 15, 2023</p>
                        </div>
                        <div 
                            className="group inline-flex items-center text-white/50 group-hover:text-greenDark transition-colors"
                        >
                            Read More
                            <img 
                                src={IconRG} 
                                alt="x" 
                                className="ml-1 h-6 w-6 opacity-60 group-hover:opacity:0 transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </a>
     );
}
 
export default BigWindow;
