import { useState } from "react";
import NewsHeader from "../components/NewsHeader";
import ProgramCard from "../components/Programms/ProgramCard";
import FilterButton from "../components/FilterButton"; 
import FullWindowSearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import bgImage from "/src/assets/images/dya7.jpg";

const NewsPage = () => {
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);  
    const itemsPerPage = 12;  

    const handleFilterChange = (category) => {
        setFilter(category);
        setCurrentPage(1);  
    };

    const newsItems = [
        { id: 1, category: "Sports", title: "Daugavpils pilsētas Izglītības pārvalde sveica skolēnus un viņu pedagogus par izciliem sasniegumiem olimpiādēs un konkursos", description: "Daugavpils Valsts ģimnāzijas direktores vietniece izglītības jomā Signita Gabrāne un vizuālās mākslas skolotāja Līga Midere-Davidčuka vada meistarklasi SOLO taksonomija un summatīvie pārbaudes darbi skolēna prasmju izvērtēšanai un izaugsmei vizuālajā mākslā Daugavpils pilsētas un Augšdaugavas novada izglītības iestāžu vizuālās mākslas skolotājiem." ,backgroundImage: bgImage },
        { id: 2, category: "Education", title: "New Scholarship Program",backgroundImage: bgImage },
        { id: 3, category: "Arts", title: "Student Art Exhibition",backgroundImage: bgImage },
        { id: 4, category: "Sports", title: "Local Basketball Championship",backgroundImage: bgImage },
        { id: 5, category: "Education", title: "New Study Resources Available",backgroundImage: bgImage },
        { id: 6, category: "Arts", title: "Art Supplies Donation Drive",backgroundImage: bgImage },
        { id: 7, category: "Sports", title: "Football Team Wins Championship",backgroundImage: bgImage },
        { id: 8, category: "Education", title: "New Mentorship Program",backgroundImage: bgImage },
        { id: 9, category: "Arts", title: "Painting Workshop",backgroundImage: bgImage },
        { id: 10, category: "Sports", title: "Track and Field Meet",backgroundImage: bgImage },
        { id: 11, category: "Education", title: "Online Learning Resources",backgroundImage: bgImage },
        { id: 12, category: "Arts", title: "Student Music Performance",backgroundImage: bgImage },
        { id: 13, category: "Arts", title: "Art Supplies Donation Drive",backgroundImage: bgImage },
        { id: 14, category: "Sports", title: "Football Team Wins Championship",backgroundImage: bgImage },
        { id: 15, category: "Education", title: "New Mentorship Program",backgroundImage: bgImage },
        { id: 16, category: "Arts", title: "Painting Workshop",backgroundImage: bgImage },
        { id: 17, category: "Sports", title: "Track and Field Meet",backgroundImage: bgImage },
        { id: 18, category: "Education", title: "Online Learning Resources",backgroundImage: bgImage },
        { id: 19, category: "Arts", title: "Student Music Performance",backgroundImage: bgImage },
    ];

    const filteredItems = filter === "all" ? newsItems : newsItems.filter(item => item.category === filter);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="bg-whiteGray">
            <NewsHeader Heading={"Jaunākās"} HeadingGreen={"Ziņas"} text={"Sekojiet līdzi mūsu skolas jaunākajām aktivitātēm, sasniegumiem un notikumiem."}/>

            <div className="container mx-auto bg-whiteGray pb-10">
                <div className="flex justify-center md:justify-start space-x-4 mx-3 items-center">
                    <div className="hidden sm:flex space-x-4">
                        {["all", "Sports", "Education", "Arts"].map((category) => (
                            <FilterButton
                                key={category}
                                category={category}
                                currentFilter={filter}
                                onClick={handleFilterChange}
                            />
                        ))}
                    </div>
                    <FullWindowSearchBar />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 mt-6 grid-auto-rows-[minmax(350px,_auto)]">
                {currentItems.length > 0 ? (
                        currentItems.map((item) => (
                            <Link key={item.id} to="/newsopened">
                                <ProgramCard  
                                    title={item.title}
                                    category={item.category} 
                                    description={item.description || "Apraksts nav pieejams"} 
                                    backgroundImage={item.backgroundImage} 
                                    date="12.12.12" 
                                />
                            </Link>
                        ))
                    ) : (
                        <p className="text-center text-gray-700 col-span-full">Nav atrasti neviena ziņa atbilstoša filtram.</p>
                    )}
                </div>


                <div className="flex items-center justify-center mt-6 space-x-4">
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                    >
                        Iepriekš
                    </button>

                    <span className="text-lg mx-3 font-semibold text-gray-700">{currentPage} / {totalPages}</span>

                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                    >
                        Nākamais
                    </button>

                </div>
            </div>
        </div>
    );
};

export default NewsPage;
