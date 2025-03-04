const ServiceTechnical = ({ technical }) => {
    return ( 
        <div className="flex flex-col bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-greenDark mb-4">{technical[0].title}</h3>
            <ul className="list-disc pl-4 text-sm sm:text-lg text-gray-800 space-y-3">
                {technical && technical.length > 0 ? (
                    technical.map((technical, index) => (
                        <li key={index} className="font-medium text-[#526144] hover:text-[#3c4e32] transition-colors duration-300">
                            {technical.info}
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">Nav pieejama tehniskā informācija.</li>
                )}
            </ul>
        </div>
    );
}
 
export default ServiceTechnical;
