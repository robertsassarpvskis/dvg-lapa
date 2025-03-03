import React from 'react';
import NewsHeader from "/src/components/NewsHeader.jsx";
import TeamPage from '../../components/Kolektivs/audzinatajuTabula';
import {skolenuLidzparvalde} from "/src/data/lidzparvalde.js";

const LidzparvaldePage = () => {
    return (
        <div className='bg-whiteGray'>
            <NewsHeader Heading={'Ar Drosmi '} HeadingGreen={'un Izturību!'} text={"Daugavpils Valsts ģimnāzijas Skolēnu līdzpārvalde ir neatkarīga, demokrātiska un sabiedriska organizācija, kas pārstāv un aizstāv skolēnu intereses, sekmē ģimnāzijas sabiedriskās dzīves veidošanos un veicina mācību procesa efektivitāti. SL savā darbā respektē citu skolēnu viedokli un izturas pret to toleranti, neuzspiežot savu gribu."}/>
                <div className="container mx-auto px-4 sm:px-8 lg:px-4 pb-10">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 space-x-3">
                        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
                            <h2 className="text-3xl font-bold text-center my-4 text-greenDark">Mērķi:</h2>
                            <ul className="list-disc list-inside text-black/70 space-y-2">
                                <li>Skolēnu un ģimnāzijas vadības interešu saskaņošana.</li>
                                <li>Skolēnu aktīva iesaistīšanās audzināšanas, mācību un sabiedriskās dzīves organizēšanā, kā arī skolēnu iniciatīvas, organizatorisko prasmju un sabiedrības prasmju veidošana.</li>
                                <li>Attīstīt izglītojamo prasmi darboties komandā, prasmi pieņemt lēmumus un plānot darbību.</li>
                                <li>Attīstīt prasmi kritiski izvērtēt un analizēt esošo un vēlamo situāciju.</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
                        <h2 className="text-3xl font-bold text-center my-4 text-greenDark">Uzdevumi:</h2>
                            <ul className="list-disc list-inside text-black/70 space-y-2">
                                <li>Pārstāvēt skolēnu intereses un tiesības ģimnāzijā.</li>
                                <li>Apkopot skolēnu priekšlikumus un tos īstenot ģimnāzijas sabiedriskās dzīves veidošanā.</li>
                                <li>Veidot, turpināt un izkopt ģimnāzijas tradīcijas.</li>
                                <li>Organizēt un vadīt kultūras pasākumus ģimnāzijā.</li>
                                <li>Sadarboties ar citu izglītības iestāžu pašpārvaldēm, līdzpārvaldēm, pašvaldības, valsts un sabiedriskajām organizācijām savas kompetences ietvaros.</li>
                            </ul>

                        </div>
                    </div>
                    
                    <TeamPage data={skolenuLidzparvalde}/>

                </div>        
        </div>
    );
};

export default LidzparvaldePage;