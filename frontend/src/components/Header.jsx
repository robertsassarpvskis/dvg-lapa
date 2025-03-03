import ButtonGreen from "./ButtonGreen";
import Image from "/src/assets/images/dya7.jpg";
import SwiperCards from "./CarouselCards";
import CarouselSlider from '../components/Carousel.jsx';
import Image1 from "/src/assets/images/dya7.jpg";
import Image2 from "/src/assets/images/dvg2.jpg"; 
import Image3 from "/src/assets/images/dvg.jpg";
import Image4 from "/src/assets/images/pils.jpg";
import Image5 from "/src/assets/images/dvg-20-001_max.jpg";

const HeaderHome = () => {
        const images = [Image1, Image2, Image3, Image4, Image5];
    
    return (
        <section className="news-header">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Section */}
                    <div className="md:w-1/2 ms-5 md:ms-5 sm:ms-0 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4  sm:text-center md:text-start">
                            Daugavpils Valsts <br /><span className="text-[#8b9d77]">ģimnāzija</span>
                        </h1>
                        <p className="text-gray-600 text-lg mb-6 md:w-[80%]">
                            Mūsu skola piedāvā plašas izglītības iespējas un augstas kvalitātes mācību programmas, kas sagatavo jauniešus nākotnes izaicinājumiem.
                        </p>
                        <ButtonGreen text={"Par Mums"} />
                    </div>

                    <div className="md:w-1/2 w-full">
                        <CarouselSlider images={images} full={true}/>

                
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderHome;
