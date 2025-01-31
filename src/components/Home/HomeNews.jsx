import ButtonGreen from "../ButtonGreen";
import ButtonWhite from "../ButtonWhite";
import BigWindow from "../News/BigWindowHome";
import TitleGreen from "../TitleGreen";
import HorizontalNews from "../News/HorizontalHome"; // Import the new HorizontalNews component

const HomeNews = () => {
    const newsItems = [
        {
            title: "New Sports Complex Opening Ceremony",
            date: "Oct 12, 2023",
            category: "Campus Update",
            color: "bg-greenLight text-greenDark",
            image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3",
        },
        {
            title: "International Exchange Program Launch",
            date: "Oct 10, 2023",
            category: "Global Education",
            color: "bg-greenLight text-greenDark",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3",
        },
        {
            title: "Student Art Exhibition Opens",
            date: "Oct 8, 2023",
            category: "Arts & Culture",
            color: "bg-greenLight text-greenDark",
            image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3",
        },
    ];

    return (
        <div className="py-16 bg-whiteGray">
            <div className="container  mx-auto px-2 sm:px-4 lg:px-12">
                <div className="flex flex-col items-center text-center mb-12">
                    <TitleGreen darkText={"Skolas Ziņas "} greenText={"& Jaunumi"} />
                    <div className="w-20 h-1 bg-greenDark rounded-full mb-4"></div>
                    <p className="text-black/60 text-lg max-w-3xl">
                        Palieciet informēti par jaunākajiem notikumiem, sasniegumiem un pasākumiem mūsu akadēmiskajā kopienā
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:mx-0 sm:mx-3">
                    <div className="lg:col-span-2 relative group">
                        <BigWindow />
                    </div>

                    <div className="lg:col-span-2 flex flex-col justify-between">
                        {newsItems.map((item, index) => (
                            <HorizontalNews key={index} item={item} />
                        ))}
                        <div className="flex justify-start mt-0">
                            <ButtonWhite Link={"/news"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNews;
