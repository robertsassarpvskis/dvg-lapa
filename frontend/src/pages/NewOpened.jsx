import InfoHeader from "../components/News/HeaderInformation";
import CarouselSlider from '../components/Carousel.jsx';
import Image1 from "/src/assets/images/dya7.jpg";
import Image2 from "/src/assets/images/dvg2.jpg"; 
import Image3 from "/src/assets/images/dvg.jpg";
import Image4 from "/src/assets/images/pils.jpg";
import Image5 from "/src/assets/images/dvg-20-001_max.jpg";
const NewsOpened = () => {

    const images = [Image1, Image2, Image3, Image4, Image5];

    return ( 
    
    <div className="bg-whiteGray">
        <InfoHeader
            title="New Information"
            subtitle="Sports"
            category="News"
            text="Stay updated with the latest news and information in our new section. We bring you the most recent updates, insights, and trends."
            imageUrl="https://via.placeholder.com/1200x400"
        />    
        <div className="container mx-auto flex flex-col gap-16 mt-[-100px] px-4 ">
            <CarouselSlider images={images} full={false}/>

            <p className="text-lg leading-relaxed text-gray-700 py-6 px-2 lg:px-24 indent-12">
                Lorem ipsum dolor sit amet. Et voluptate quasi ea impedit repudiandae eos perferendis 
                accusantium ut ducimus ratione eos earum pariatur et unde ipsa. Id dolor magnam est necessitatibus 
                perferendis qui veniam sequi et velit voluptas in fugit provident et galisum rerum est voluptas dolores. 
                Et doloremque repellat ex velit dolorem id asperiores nulla aut animi sapiente eum eveniet reiciendis qui 
                sunt maxime non asperiores voluptas...
            </p>
        </div>
    </div> 
    );
}
 
export default NewsOpened;