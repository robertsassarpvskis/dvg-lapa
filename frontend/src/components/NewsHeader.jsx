import Breadcrumb from "./BreadCrumb";

const NewsHeader = ({ Heading, HeadingGreen, text }) => {
    return (
        <div className="news-header">
            <div className="flex flex-col">
                <Breadcrumb />  
                <div className="container mx-auto flex flex-col items-center text-center px-4  py-32 md:py-24 lg:py-48 sm:mb-4 md:mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-black/85 mb-7 md:mb-5 sm:w-[75%] md:w-[85%] lg:w-[50%] w-full">
                        {Heading} <span className="text-greenDark">{HeadingGreen}</span>
                    </h1>
                    <p className="text-sm sm:text-sm md:text-lg text-center text-black/85 sm:w-[75%] md:w-[85%] lg:w-[65%] w-full">
                        {text}
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default NewsHeader;
