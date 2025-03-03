import NewsHeader from "../components/NewsHeader";
import MissonElement from "../components/Home/MissionElement";
import HyperLinkDoc from "../components/HyperLink";
import ServiceImageSection from "../components/Service/ServiceImageSection";
import ServiceContact from "../components/Service/ServiceContact";
import ServiceTechnical from "../components/Service/ServiceTechincal";
import ScheduleTable from "../components/Service/ServiceScheduleTable";

const InfoPage = ({
    heading,
    headingGreen,
    introText,
    image,
    aboutTitle,
    aboutText,
    missionElements,
    schedule,
    documents,
    contacts,
    technicals,
    children
}) => {
    return (
        <div className="bg-whiteGray">
            <NewsHeader Heading={heading} HeadingGreen={headingGreen} text={introText} />
            <div className="container mx-auto px-4 sm:px-8 lg:px-4 pb-10">
                <ServiceImageSection Title={aboutTitle} text={aboutText} />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
                    {missionElements.map((item, index) => (
                        <MissonElement key={index} title={item.title} text={item.text} icon={item.icon} Link={item.link} />
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10">
                    <ServiceTechnical technical={technicals}/>
                    <div className="flex flex-col items-center gap-4">
                        {documents.map((doc, index) => (
                            <HyperLinkDoc key={index} Title={doc.title} Link={doc.link} />
                        ))}
                    </div>
                    <ServiceContact contacts={contacts} /> 

                </div>

                {schedule && schedule.length > 0 && (
                    <div className="overflow-x-auto">
                        <ScheduleTable schedule={schedule} />
                    </div>
                )}
                {children}
            </div>
        </div>
    );
};

export default InfoPage;
