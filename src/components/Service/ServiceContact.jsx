const ServiceContact = () => {
    return (
        <div className="flex flex-col bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-greenDark mb-4">
                Kontakti
            </h3>
            <div className="space-y-6 leading-relaxed">
                <p className="text-base text-gray-700">
                    <span className="font-semibold">Skolas abonementa bibliotekāre Marina Rumjanceva:</span><br />
                    <a href="mailto:marina.rumjanceva@daugrc.edu.lv" className="text-greenDark font-medium hover:underline block">
                        marina.rumjanceva@daugrc.edu.lv
                    </a>
                    <a href="tel:+37126451176" className="text-greenDark font-medium hover:underline block">
                        t. 26451176
                    </a>
                </p>
                <p className="text-base text-gray-700">
                    <span className="font-semibold">Metodiskās literatūras abonementa bibliotekāre Jeļena Stankeviča:</span><br />
                    <a href="mailto:jelena.stankevica@daugrc.edu.lv" className="text-greenDark font-medium hover:underline block">
                        jelena.stankevica@daugrc.edu.lv
                    </a>
                    <a href="tel:+37122064962" className="text-greenDark font-medium hover:underline block">
                        t. 22064962
                    </a>
                </p>
            </div>
        </div>
    );
}

export default ServiceContact;
