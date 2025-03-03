import CategoriesPage from "./CategoriesPage";
import MissionIcon from "/src/assets/icons/Mission.svg";

const categoriesData = [
  { title: "Noderīga Informācija", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
  { title: "Karjeras Konsultants", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon },
  { title: "Izglītības Psihologs", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
  { title: "Sociālais Pedagogs", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
  { title: "Veselības Veicināšanas Koordinētājs", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
  { title: "Veidlapas", text: "Ētikas principos balstīta mācīšanās kopiena kvalitatīvai izglītībai", icon: MissionIcon, link: "#" },
];

const ParentsPage = () => {
  return (
    <CategoriesPage 
      title="Informācija" 
      headingGreen="Vecākiem" 
      description="Šeit jūs atradīsiet dažādas izglītības resursu kategorijas."
      categories={categoriesData}
      card={"mission"}
    />
  );
};

export default ParentsPage;
