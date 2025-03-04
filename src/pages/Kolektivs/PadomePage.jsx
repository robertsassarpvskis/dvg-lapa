import React from 'react';
import NewsHeader from "/src/components/NewsHeader.jsx";
import TeamPage from '../../components/Kolektivs/audzinatajuTabula';
import {padomeData} from "/src/data/padome.js";
import Attēls from "/src/assets/images/padome.jpg";

const PadomePage = () => {
    return ( 
        <div className='bg-whiteGray'>
            <NewsHeader Heading={'Ģimnāzijas'} HeadingGreen={'Padome'} text={"2024.gada 2.oktobra pēcpusdienā ģimnāzijā pulcējās Ģimnāzijas padomes jaunais sastāvs. Ģimnāzijas padome ir koleģiāla institūcija, kurā darbojas skolotāju, skolēnu, vecāku un dibinātāja pārstāvji. Tās darbības pamatā ir vienlīdzība, koleģialitāte, atklātība, un tā skata ar iestādes attīstību saistītus jautājumus.Padomes pirmajā sēdē par Ģimnāzijas padomes prezidentu tika ievēlēts Oskars Zuģickis."}/>
            <div className="container mx-auto px-4 sm:px-8 lg:px-4 pb-10">
                <div className="flex justify-center mb-16">
                    <img src={Attēls} alt="Ģimnāzijas Kolektīvs" className="rounded-lg shadow-lg mt-[-100px]"/>
                </div>
                <TeamPage data={padomeData}/>

            </div>        
    </div>
     );
}
 
export default PadomePage;