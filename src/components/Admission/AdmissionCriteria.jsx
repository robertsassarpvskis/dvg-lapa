import HyperLinkDoc from "../HyperLink";

const AdmissionElement = ({ title, content, link, linkTitle, link2, linkTitle2, wordDocLink }) => {
    return (
        <div className="py-10 p-5 bg-gray-100 rounded-xl shadow-2xl border-2 border-[#8b9d77]">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#526144]">
                {title}
            </h3>
            {content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-6 mb-4">
                    {paragraph.text}
                    {paragraph.list && (
                        <ul className="list-disc pl-5 mt-2">
                            {paragraph.list.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}
                </p>
            ))}
            <div className="mt-4">
                <HyperLinkDoc Link={link} Title={linkTitle} />
                {link2 && <HyperLinkDoc Link={link2} Title={linkTitle2} />}
                {wordDocLink && (
                    <a
                        href={wordDocLink}
                        className="inline-block mt-4 bg-green-500 text-white py-2 px-4 rounded-lg"
                        download
                    >
                        Lejupielādēt Word dokumentu
                    </a>
                )}
            </div>
        </div>
    );
};

export default AdmissionElement;
 