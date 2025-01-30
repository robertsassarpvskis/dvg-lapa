import Image from "/src/assets/images/dya7.jpg"; 
import MissionIcon from "/src/assets/icons/Mission.svg";
import globeBook from "/src/assets/icons/globebook.svg";
import GroupIcon from "/src/assets/icons/group.svg";
import Cycle from "/src/assets/icons/cycle.svg";
import InfoPage from "./InfoPage";

const librarySchedule = [
    { day: "Pirmdiena", schoolSubscription: "8:00 - 16:30", methodicalLiteratureSubscription: "12:00 - 17:00" },
    { day: "Otrdiena", schoolSubscription: "8:30 - 17:00", methodicalLiteratureSubscription: "12:00 - 17:00" },
    { day: "Trešdiena", schoolSubscription: "8:00 - 17:00", methodicalLiteratureSubscription: "9:00 - 14:00" },
    { day: "Ceturtdiena", schoolSubscription: "8:40 - 16:30", methodicalLiteratureSubscription: "9:00 - 17:00" },
    { day: "Piektdiena", schoolSubscription: "8:40 - 16:00", methodicalLiteratureSubscription: "9:00 - 17:00" }
];

const missionItems = [
    { title: "Katalogs", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: globeBook, link: "https://daugavpils.biblioteka.lv/Alise/lv/4/home.aspx" },
    { title: "Jaunumi, Resursi", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "https://daugrc.edu.lv/portfolio-view/jaunumi-dokumenti/" },
    { title: "Vēsture", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: Cycle, link: "https://daugrc.edu.lv/portfolio-view/vesture/" },
    { title: "Iesaku izlasīt", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: GroupIcon, link: "https://daugrc.edu.lv/portfolio-view/iesaku-izlasit/" }
];

const documentLinks = [
    { title: "Bibliotēkas lietošanas noteikumi", link: "https://daugrc.edu.lv/wp-content/uploads/2018/01/Bibliotekas_lietosanas_noteikumi_21.03.2022..pdf" },
    { title: "Bibliotēkas reglaments", link: "https://daugrc.edu.lv/wp-content/uploads/2018/01/Bibliotekas_reglaments_21.03.2022..pdf" }
];

const LibraryPage = () => {
    return (
        <InfoPage
            heading="Laipni lūgts"
            headingGreen="bibliotēkā!"
            introText="Daugavpils Valsts ģimnāzijas bibliotēka ir izglītojoša, informatīva un kultūras struktūrvienība."
            image={Image}
            aboutTitle="Par Mums"
            aboutText="Daugavpils Valsts ģimnāzijas bibliotēka ir izglītojoša, informatīva un kultūras struktūrvienība."
            missionElements={missionItems}
            schedule={librarySchedule}
            documents={documentLinks}
        />
    );
};

export default LibraryPage;
