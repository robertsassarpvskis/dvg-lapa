import CategoriesPage from "../CategoriesPage";
import interestGroups from "/src/data/interests.js";  

const InterestCategories = () => {
  const categoriesData = Object.keys(interestGroups).map((key) => {
    const group = interestGroups[key];
    return {
      title: group.title,
      text: group.description.substring(0, 100) + '...',  
      image: group.images[0],  
      link: group.link,  
    };
  });

  return (
    <CategoriesPage 
      title="Interešu " 
      headingGreen="Izglītība" 
      description="Interešu izglītība - Karjeras orientēta neformālā izglītība jauniešiem, attīstot viņu individuālās kompetences. Izvēlies savu interešu izglītības pulciņu un attīsti savas spējas un talantus, iegūsti praktiskajam darbam un dzīvei derīgu papildizglītību, nodrošini iespējas radošai pašizpausmei un savas individualitātes izkopšanai, nodrošini saturīgas un lietderīgas brīvā laika pavadīšanas iespējas, sekmē pilsoniskās un nacionālās identitātes attīstīšanu."
      categories={categoriesData}
    />
  );
};

export default InterestCategories;
