const GreenBar = () => {
    return (
        <div className="w-full bg-greenDark py-14 text-white">
            <div className="container  mx-auto px-4 sm:px-8 lg:px-4 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8  mx-3">
                    {/* Misija */}
                    <div className="group flex flex-col items-center justify-center shadow-md bg-white/10 px-3 py-3 rounded-lg transition-transform duration-300 hover:scale-105">
                        <h4 className="text-3xl font-bold mb-1 text-white/80 transition-colors duration-300 group-hover:text-white/90">
                            Misija
                        </h4>
                        <p className="text-xl text-center leading-6 text-white/65 transition-colors duration-300 group-hover:text-white/85">
                            Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai
                        </p>
                    </div>
                    <div className="group flex flex-col items-center justify-center shadow-md bg-white/10 px-4 py-4 rounded-lg transition-transform duration-300 hover:scale-105">
                        <h4 className="text-3xl font-bold mb-1 text-white/80 transition-colors duration-300 group-hover:text-white/90">
                            Misija
                        </h4>
                        <p className="text-xl text-center leading-6 text-white/65 transition-colors duration-300 group-hover:text-white/85">
                            Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai
                        </p>
                    </div>
                    {/* Vīzija */}
                    <div className="group flex flex-col items-center justify-center shadow-md bg-white/10 px-4 py-4 rounded-lg transition-transform duration-300 hover:scale-105">
                        <h4 className="text-3xl font-bold mb-1 text-white/80 transition-colors duration-300 group-hover:text-white/90">
                            Vīzija
                        </h4>
                        <p className="text-xl text-center leading-6 text-white/65 transition-colors duration-300 group-hover:text-white/85">
                            Izglītības iestāde, kas veicina izaugsmes domāšanu ilgtspējīgai attīstībai
                        </p>
                    </div>

                    {/* Vērtības */}
                    <div className="group flex flex-col items-center justify-center shadow-md bg-white/10 px-4 py-4 rounded-lg transition-transform duration-300 hover:scale-105">
                        <h4 className="text-3xl font-bold mb-1 text-white/80 transition-colors duration-300 group-hover:text-white/90">
                            Vērtības
                        </h4>
                        <ul className="text-xl text-center leading-6 text-white/65 transition-colors duration-300 group-hover:text-white/85 space-y-2">
                            <li>Cilvēks</li>
                            <li>Cieņa</li>
                            <li>Griba</li>
                            <li>Zināšanas</li>
                            <li>Latviskā kūltūrvide</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreenBar;
