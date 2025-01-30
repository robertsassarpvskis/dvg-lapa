const ServiceTechical = () => {
    return ( 
        <div className="flex flex-col bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-greenDark mb-4">Bibliotēkas tehniskais nodrošinājums</h3>
            <ul className="list-disc pl-4 text-sm sm:text-lg text-gray-800 space-y-3">
                <li className="font-medium text-[#526144] hover:text-[#3c4e32] transition-colors duration-300">3 datori</li>
                <li className="font-medium text-[#526144] hover:text-[#3c4e32] transition-colors duration-300">kopējamā iekārta</li>
                <li className="font-medium text-[#526144] hover:text-[#3c4e32] transition-colors duration-300">printeris</li>
                <li className="font-medium text-[#526144] hover:text-[#3c4e32] transition-colors duration-300">3 e-grāmatu lasītāji</li>
            </ul>
        </div>
     );
}
 
export default ServiceTechical;