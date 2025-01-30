const FilterButton = ({ category, currentFilter, onClick }) => {
    const isActive = currentFilter === category;

    return (
        <button
            onClick={() => onClick(category)}
            className={`py-2 px-5 my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md
                ${isActive ? 'scale-105 bg-gradient-to-r from-[#009b49] to-[rgb(105,184,141)] hover:scale-110' : 'bg-greenLight'}
                text-[#fff]`}
        >
            <span
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#009b49] to-[rgb(105,184,141)] transition-all duration-500 ease-in-out 
                    ${isActive ? 'z-[-1] opacity-100' : 'z-[-1] opacity-0'}`}
            ></span>
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    );
};

export default FilterButton;
