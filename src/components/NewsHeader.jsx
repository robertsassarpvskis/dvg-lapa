const NewsHeader = ({ Heading, HeadingGreen, text }) => {
    return (
        <div className="news-header py-32 md:py-24 lg:py-48 sm:mb-4 md:mb-12">
            <div className="container mx-auto flex flex-col items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-black/85 mb-3 md:mb-3">
                    {Heading} <span className="text-greenDark">{HeadingGreen}</span>
                </h1>
                <p className="text-sm sm:text-sm md:text-lg text-black/85 sm:w-[75%] md:w-[85%] lg:w-[50%] w-full">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default NewsHeader;
