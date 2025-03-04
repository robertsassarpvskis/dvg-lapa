const SponsorElement = ({ sponsor, name }) => {
    return (
        <div className="group flex items-center mb-3 justify-center p-4 bg-white rounded-lg hover:bg-green-50 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg h-full">
            <img
                src={sponsor}
                alt={name}
                className="h-full w-auto object-contain filter  transition-all duration-500 ease-in-out"
                loading="lazy"
            />
        </div>
    );
};

export default SponsorElement;
