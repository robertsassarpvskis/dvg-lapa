import NewsHeader from "/src/components/NewsHeader";
import Attēls from "/src/assets/images/kolektivs.jpg";
import TeamPage from "/src/components/Kolektivs/audzinatajuTabula.jsx";
import {teamData} from "/src/data/kolektivs.js";


const KolektivsPage = () => {
    return ( 
        <div className="bg-whiteGray">
            <NewsHeader Heading={"Mūsu"} HeadingGreen={"Kolektīvs"}/>
            <div className="container mx-auto px-4 sm:px-8 lg:px-4 pb-10">
                <div className="flex justify-center mb-16">
                    <img src={Attēls} alt="Ģimnāzijas Kolektīvs" className="rounded-lg shadow-lg mt-[-100px] w-[80%]"/>
                </div>
                <TeamPage data={teamData}/>

            </div>
        </div>
     );
}
 
export default KolektivsPage;