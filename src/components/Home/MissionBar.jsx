import MissonElement from "./MissionElement";
import MissionIcon from "/src/assets/icons/Mission.svg";
import GroupIcon from "/src/assets/icons/group.svg";
import BookIcon from "/src/assets/icons/book.svg";


const MissionBar = () => {
    return ( 
        <section className="pt-12 sm:pt-6 md:pt-12 pb-20 bg-whiteGray">
            <div className="container mx-auto px-2 sm:px-4 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MissonElement 
                        title="Misija" 
                        text="Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai" 
                        icon={MissionIcon}
                    />
                    <MissonElement 
                        title="Vīzija" 
                        text="Izglītības iestāde, kas veicina izaugsmes domāšanu ilgtspējīgai attīstībai" 
                        icon={BookIcon}
                    />
                    <MissonElement 
                        title="Vērtības" 
                        text="Cilvēks, Cieņa, Griba, Zināšanas, Latviskā kūltūrvide" 
                        icon={GroupIcon}
                    />
                </div>
            </div>
        </section>
    );
}

export default MissionBar;
