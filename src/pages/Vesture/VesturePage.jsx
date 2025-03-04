import NewsHeader from "/src/components/NewsHeader";
import { vestureData } from "../../data/vesture";

const VesturePage = () => {
    const vesture = vestureData.vesture[0];

    let combinedEvents = [];
    let tempGroup = [];

    // Grupē notikumus
    vesture.notikumi.forEach((event) => {
        if (event.images && event.images.length > 0) {
            if (tempGroup.length > 0) {
                combinedEvents.push({ texts: [...tempGroup] });
                tempGroup = [];
            }
            combinedEvents.push(event);
        } else {
            tempGroup.push(event);
        }
    });

    if (tempGroup.length > 0) {
        combinedEvents.push({ texts: [...tempGroup] });
    }

    return (
        <div className="bg-whiteGray">
            <NewsHeader HeadingGreen={vesture.title} text={vesture.description} />
            <div className="container mx-auto px-4 sm:px-8 lg:px-12 pb-10">
                <div className="space-y-6">
                    {combinedEvents.map((event, index) => {
                        const hasImages = event.images && event.images.length > 0;

                        return (
                            <div
                                key={index}
                                className={`grid gap-6 items-center p-6 rounded-2xl shadow-lg border border-gray-200 bg-white ${
                                    hasImages ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                                }`}
                            >
                                {index % 2 === 0 ? (
                                    <>
                                        <div>
                                            {event.texts
                                                ? event.texts.map((textEvent, i) => (
                                                      <div key={i} className="mb-4">
                                                          <h2 className="text-greenDark font-semibold text-3xl mb-2">{textEvent.gads}</h2>
                                                          <p className="text-black/60" dangerouslySetInnerHTML={{ __html: textEvent.notikums }} />
                                                      </div>
                                                  ))
                                                : null}
                                            {event.gads && <h2 className="text-greenDark font-semibold text-3xl mb-2">{event.gads}</h2>}
                                            {event.notikums && <p className="text-black/60" dangerouslySetInnerHTML={{ __html: event.notikums }} />}
                                        </div>
                                        {hasImages && (
                                            <div className="grid grid-cols-2 gap-4">
                                                {event.images.map((imgSrc, imgIndex) => (
                                                    <img
                                                        key={imgIndex}
                                                        className="w-full h-auto rounded-lg shadow-md"
                                                        src={imgSrc}
                                                        alt={`Notikuma attēls ${imgIndex + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {hasImages && (
                                            <div className="grid grid-cols-2 gap-4">
                                                {event.images.map((imgSrc, imgIndex) => (
                                                    <img
                                                        key={imgIndex}
                                                        className="w-full h-auto rounded-lg shadow-md"
                                                        src={imgSrc}
                                                        alt={`Notikuma attēls ${imgIndex + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        <div>
                                            {event.texts
                                                ? event.texts.map((textEvent, i) => (
                                                      <div key={i} className="mb-4">
                                                          <h2 className="text-greenDark font-semibold text-3xl mb-2">{textEvent.gads}</h2>
                                                          <p className="text-black/60" dangerouslySetInnerHTML={{ __html: textEvent.notikums }} />
                                                      </div>
                                                  ))
                                                : null}
                                            {event.gads && <h2 className="text-greenDark font-semibold text-3xl mb-2">{event.gads}</h2>}
                                            {event.notikums && <p className="text-black/60" dangerouslySetInnerHTML={{ __html: event.notikums }} />}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VesturePage;
