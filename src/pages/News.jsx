import { useState } from "react";
import NewsHeader from "../components/NewsHeader";
import ProgramCard from "../components/Programms/ProgramCard";
import FilterButton from "../components/FilterButton"; // Import the FilterButton
import FullWindowSearchBar from "../components/SearchBar";

const NewsPage = () => {
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);  // Pievienots stāvoklis pašreizējai lapai
    const itemsPerPage = 9;  // Definēts 9 elementi uz vienas lapas

    const handleFilterChange = (category) => {
        setFilter(category);
        setCurrentPage(1);  // Pārslēdz lapu uz pirmo, kad tiek mainīts filtrs
    };

    const newsItems = [
        { id: 1, category: "Sports", title: "New Sports Complex Opening" },
        { id: 2, category: "Education", title: "New Scholarship Program" },
        { id: 3, category: "Arts", title: "Student Art Exhibition" },
        { id: 4, category: "Sports", title: "Local Basketball Championship" },
        { id: 5, category: "Education", title: "New Study Resources Available" },
        { id: 6, category: "Arts", title: "Art Supplies Donation Drive" },
        { id: 7, category: "Sports", title: "Football Team Wins Championship" },
        { id: 8, category: "Education", title: "New Mentorship Program" },
        { id: 9, category: "Arts", title: "Painting Workshop" },
        { id: 10, category: "Sports", title: "Track and Field Meet" },
        { id: 11, category: "Education", title: "Online Learning Resources" },
        { id: 12, category: "Arts", title: "Student Music Performance" },
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
                {/* Filter and Search Bar */}
                <div className="flex justify-start space-x-4 mx-3 items-center">
                    {["all", "Sports", "Education", "Arts"].map((category) => (
                        <FilterButton
                            key={category}
                            category={category}
                            currentFilter={filter}
                            onClick={handleFilterChange}
                        />
                    ))}

                    <FullWindowSearchBar />
                </div>

                {/* Display News Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 mt-6">
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
                            <ProgramCard key={item.id} title={item.title} />
                        ))
                    ) : (
                        <p className="text-center text-gray-700 col-span-full">Nav atrasti neviena ziņa atbilstoša filtram.</p>
                    )}
                </div>

                <div className="flex items-center justify-center mt-6 space-x-4">
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                    >
                        Iepriekš
                    </button>
                    <span className="text-lg">{currentPage} / {totalPages}</span>
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg"
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
