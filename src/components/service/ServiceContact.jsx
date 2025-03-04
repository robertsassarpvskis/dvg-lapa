const ServiceContact = ({ contacts }) => {
    return (
        <div className="flex flex-col bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-greenDark mb-4">
                Kontakti
            </h3>
            <div className="space-y-6 leading-relaxed">
                {contacts.map((contact, index) => (
                    <div key={index} className="border-b pb-4 mb-4 last:border-b-0">
                        <p className="text-base text-gray-700">
                            <span className="font-semibold">{contact.title}</span><br />
                            <a href={`mailto:${contact.email}`} className="text-greenDark font-medium hover:underline block">
                                {contact.email}
                            </a>
                            <a href={`tel:${contact.phone}`} className="text-greenDark font-medium hover:underline block">
                                {contact.phone}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceContact;
