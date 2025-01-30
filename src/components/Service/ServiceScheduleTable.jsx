const ScheduleTable = ({ schedule }) => {
    return (
        <table className="table-auto w-full rounded-xl shadow-xl bg-white">
            <thead className="bg-greenDark w-full text-white text-sm sm:text-lg">
                <tr className="text-center">
                    <th className="px-3 sm:px-6 py-2 sm:py-4">Diena</th>
                    <th className="px-3 sm:px-6 py-2 sm:py-4">Skolas abonements</th>
                    <th className="px-3 sm:px-6 py-2 sm:py-4">Metodiskās literatūras abonements</th>
                </tr>
            </thead>
            <tbody>
                {schedule.map((day, index) => (
                    <tr 
                        key={index} 
                        className={`border-t border-gray-300 hover:bg-green-50 text-center ${index === schedule.length - 1 ? 'rounded-b-2xl' : ''}`}
                    >
                        <td className="px-3 sm:px-6 py-2 sm:py-4 text-gray-800">{day.day}</td>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 text-gray-600">{day.schoolSubscription}</td>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 text-gray-600">{day.methodicalLiteratureSubscription}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;
