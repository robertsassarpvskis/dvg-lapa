import ButtonGreen from "./ButtonGreen";
import Image from "/src/assets/images/dya7.jpg";

const HeaderHome = () => {
    return (
        <section className="news-header">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Section */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                            Daugavpils Valsts <br /><span className="text-[#8b9d77]">ģimnāzija</span>
                        </h1>
                        <p className="text-gray-600 text-lg mb-6 md:w-[80%]">
                            Mūsu skola piedāvā plašas izglītības iespējas un augstas kvalitātes mācību programmas, kas sagatavo jauniešus nākotnes izaicinājumiem.
                        </p>
                        <ButtonGreen text={"Par Mums"} />
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 w-full">
                        <div className="relative w-full">
                            {/* Background element behind the image */}
                            <div className="absolute -inset-2 sm:-inset-4 bg-[#8b9d77]/10 rounded-lg transform rotate-2 sm:rotate-3"></div>
                            {/* Image */}
                            <img
                                src={Image}
                                alt="Students studying"
                                className="rounded-lg shadow-lg relative w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderHome;
