// import Image from "/src/assets/images/dya7.jpg"; 
import MissionIcon from "/src/assets/icons/Mission.svg";
import globeBook from "/src/assets/icons/globebook.svg";
import GroupIcon from "/src/assets/icons/group.svg";
import Cycle from "/src/assets/icons/cycle.svg";
import InfoPage from "./InfoPage";

const Schedule = [
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
const contacts = [
    {title: "Bibliotēkas vadītāja",email: "biblioteka@example.com",phone: "+371 12345678"},
    {title: "Administrācija",email: "admin@example.com",phone: "+371 87654321"}
];


const documentLinks = [
    { title: "Bibliotēkas lietošanas noteikumi", link: "https://daugrc.edu.lv/wp-content/uploads/2018/01/Bibliotekas_lietosanas_noteikumi_21.03.2022..pdf" },
    { title: "Bibliotēkas reglaments", link: "https://daugrc.edu.lv/wp-content/uploads/2018/01/Bibliotekas_reglaments_21.03.2022..pdf" }
];
const technical = [
    { title: "Bibliotēkas tehniskais nodrošinājums", info: "3 datori" },
    { info: "kopējamā iekārta" },
    { info: "printeris" },
    { info: "3 e-grāmatu lasītāji" }
];

const Image = [
    "/src/assets/images/dya7.jpg",
    "/src/assets/images/dvg2.jpg",
    "/src/assets/images/dvg.jpg",
    "/src/assets/images/pils.jpg",
    "/src/assets/images/dvg-20-001_max.jpg"
];

const DormPage = () => {
    return (
        <InfoPage
            heading="Laipni lūgts"
            headingGreen="Dienesta Viesnīcā!"
            introText="Daugavpils Valsts ģimnāzijas viesnīca atrodas pilsētas centrā, dažu minūšu gājiena attālumā no autoostas, dzelzceļa stacijas, bankām, iepirkšanās centriem, kultūrvēsturiskiem objektiem. Viesnīcā ir veikts eiro remonts un iekārtoti mājīgi numuriņi. Dienesta viesnīca piedāvā laipnu apkalpošanu, gultasvietas īres un telpu nomas pakalpojumus, viesmīlīgas, mājīgas telpas un draudzīgas cenas ikvienam."
            image={Image}
            aboutTitle="Valsts ģimnāzijas dienesta viesnīca piedāvā:"
            aboutText={
                <ul className="list-disc ml-4">
                    <li>Gultasvietas īre (divvietīgā, trīsvietīgā vai četrvietīgā istabā);</li>
                    <li>Telpu noma;</li>
                    <p className="py-2"><b>Saskaņā</b> ar 2024.gada 29.augusta Daugavpils valstspilsētas pašvaldības domes lēmumu Nr.457 ar 2024.gada 1.septembri tiek noteiktas šādas cenas:</p>
                    <li>Gultasvietas īre 2,3,4-vietīgā istabā (1 diennakts 1 personai) – 13.50 EUR ar PVN</li>
                    <li>Gultasvietas īre 1 izglītojamajam/studentam mēnesī – 70.00* EUR ar PVN (*atlaide 50% apmērā tiek piešķirta izglītojamajiem, kuri mācās Daugavpils pilsētas pamata vai vispārējās vidējās izglītības iestādēs un Mākslu izglītības kompetences centrā “Daugavpils Dizaina un mākslas vidusskola “Saules skola””);</li>
                    <li>Telpu noma stundā - 0,05 EUR/m2 ar PVN (konferenču telpa - 72,79 m2; mācību telpa (28 vietas) - 45,88 m2);</li>
                    <li>Datortehnikas (datorkomplekts, interaktīvā tāfele, multimediju projektors, drukas iekārta, kopētājs u.c.) noma (1 vienība stundā) – 0.50 EUR ar PVN.</li>
                    <p className="pt-2"><b>Skolēnu dienesta viesnīcā</b> uzņem ar direktora rīkojumu, pamatojoties uz vecāku (aizbildņu), vai skolēna (kas sasniedzis pilngadību) iesniegumu un noslēdzot īres līgumu.</p>
                </ul>
            }
            missionElements={missionItems}
            schedule={Schedule}
            documents={documentLinks}
            contacts={contacts}
            technicals={technical}
        />
    );
};

export default DormPage;
