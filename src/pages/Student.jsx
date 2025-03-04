import CategoriesPage from "./CategoriesPage";
import MissionIcon from "/src/assets/icons/Mission.svg";

const categoriesData = [
  { title: "Pedagogs Karjeras Konsultants", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
  { title: "Grafiki", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon },
  { title: "Izglītības Psihologs", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
  { title: "Sociālais Pedagogs", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "/student/sociālais-pedagogs" },
  { title: "Veselības Veicināšanas Koordinētājs", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
  { title: "Mācību Literatūra", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
  { title: "Stundu Saraksts", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "https://dvg.edupage.org/timetable/view.php?fullscreen=1" }
];

const StudentPage = () => {
  return (
    <CategoriesPage 
      title="Informācija" 
      headingGreen="Skolēniem" 
      description="Šeit jūs atradīsiet dažādas izglītības resursu kategorijas."
      categories={categoriesData}
      card={"mission"}
    />
  );
};

export default StudentPage;
