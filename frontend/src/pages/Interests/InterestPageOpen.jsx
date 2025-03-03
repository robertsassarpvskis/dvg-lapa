import NewsHeader from "../../components/NewsHeader";
import interestGroups from "/src/data/interests.js";  
import {vestureData} from "/src/data/vesture.js";  

import CarouselSlider from '/src/components/Carousel.jsx';

const InterestPageOpen = ({ group }) => {
    const Data = interestGroups[group];

    return ( 
        <div className="bg-whiteGray">
            <NewsHeader Heading={Data.title} HeadingGreen={Data.teacher} text={Data.description} />
            <div className="container mx-auto px-4 sm:px-8 lg:px-4 pb-10">
                <div className="mt-[-100px]">
                    <CarouselSlider images={Data.images} />
                </div>
                <p>{Data.text}</p>
            </div>
        </div>
     );
}

export default InterestPageOpen;
