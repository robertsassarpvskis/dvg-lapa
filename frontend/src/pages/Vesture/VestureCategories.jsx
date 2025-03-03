import CategoriesPage from "../CategoriesPage";
import {vestureData} from "/src/data/vesture.js"; 

const VestureCategories = () => {
    return ( 
        <CategoriesPage 
            title="Tradīcijas, Vēsture," 
            headingGreen="Simbolika" 
            description="Interešu izglītība - Karjeras orientēta neformālā izglītība jauniešiem, attīstot viņu individuālās kompetences. Izvēlies savu interešu izglītības pulciņu un attīsti savas spējas un talantus, iegūsti praktiskajam darbam un dzīvei derīgu papildizglītību, nodrošini iespējas radošai pašizpausmei un savas individualitātes izkopšanai, nodrošini saturīgas un lietderīgas brīvā laika pavadīšanas iespējas, sekmē pilsoniskās un nacionālās identitātes attīstīšanu."
            categories={vestureData}
        />
     );
}
 
export default VestureCategories;